import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';
import { fetchWrapper } from '../helpers/fetch-wrapper';
import { IFormValues } from '../type/type';




function handleGetItem(){
    const getItem = localStorage.getItem('user');
    if (typeof getItem === 'string'){
        return JSON.parse(getItem);
    }
    if (typeof getItem === null){
        return null;
    }
}



const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(typeof window !== 'undefined' ? handleGetItem() : null);

const userService = {
    user: userSubject.asObservable(),
    get userValue () { return userSubject.value },
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};
export default userService;


async function login(user: IFormValues) {
    const userLogin = await fetchWrapper.post(`${baseUrl}/authenticate`, user);
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    userSubject.next(userLogin);

    typeof window !== 'undefined' 
        ? localStorage.setItem('user', JSON.stringify(userLogin)) 
        : null
        
    return userLogin;
}

function logout() {
    // remove user from local storage, publish null to user subscribers and redirect to login page
    typeof window !== 'undefined' 
        ? localStorage.removeItem('user') 
        : null

    userSubject.next(null);
    Router.push('/login');
}

function register(user: IFormValues) {
    return fetchWrapper.post(`${baseUrl}/form`, user)
}

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id: any) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id: any, params: IFormValues) {
    const x = await fetchWrapper.put(`${baseUrl}/${id}`, params);
    // update stored user if the logged in user updated their own record
    if (id === userSubject.value.id) {
        // update local storage
        const user = { ...userSubject.value, ...params };

        typeof window !== 'undefined' 
            ? localStorage.setItem('user', JSON.stringify(user)) 
            : null

        // publish updated user to subscribers
        userSubject.next(user);
    }
    return x;
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: any) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}