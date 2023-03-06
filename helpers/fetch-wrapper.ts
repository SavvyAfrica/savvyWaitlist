import getConfig from 'next/config';
import { userService } from '../services';
import { IFormValues } from '../type/type';

const { publicRuntimeConfig } = getConfig();


export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};


async function get(url: string) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
}

async function post(url: string, user: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(user)
    };
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
}

async function put(url: string, data: object) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(data)
    };  
    const response = await fetch(url, requestOptions);
    return handleResponse(response); 
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(url: string) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(url)
    };
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
}


// helper functions

function authHeader(url: string) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = userService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.token}` };
    }
}

function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            if ([401, 403].includes(response.status) && userService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                userService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}