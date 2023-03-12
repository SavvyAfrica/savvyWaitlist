import { BehaviorSubject } from 'rxjs'
import getConfig from 'next/config'
import Router from 'next/router'
import { fetchWrapper } from '../helpers/fetch-wrapper'
import { IFormValues } from '../type/type'

function handleGetItem() {
  const getItem = localStorage.getItem('user')
  if (typeof getItem === 'string') {
    return JSON.parse(getItem)
  }
}


const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(typeof window !== 'undefined' ? handleGetItem() : null);


const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value
  },
  login,
  logout,
  register,
  update,
  delete: _delete,
  getAll,
  getById,
}
export default userService


async function login(user: any) {
    const userLogin = await fetchWrapper.post(`${baseUrl}/auth/login`, user);
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    userSubject.next(userLogin);


  typeof window !== 'undefined'
    ? localStorage.setItem('user', JSON.stringify(userLogin))
    : null

  return userLogin
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  typeof window !== 'undefined' ? localStorage.removeItem('user') : null

  userSubject.next(null)
  Router.push('/')
}

function register(user: IFormValues) {
    return fetchWrapper.post(`${baseUrl}/auth/register`, user)
}

async function update(url: string, data: any) {
    const userUpdate = await fetchWrapper.put(`${baseUrl}/users/${url}`, data);
    // update stored user if the logged in user updated their own record


  // update local storage
  const user = { ...userSubject.value, ...data }

  typeof window !== 'undefined'
    ? localStorage.setItem('user', JSON.stringify(user))
    : null

  // publish updated user to subscribers
  userSubject.next(user)

  return userUpdate
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id: any) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
}

function getAll(url: string) {
  return fetchWrapper.get(`${baseUrl}/${url}`)
}

function getById(id: any) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}
