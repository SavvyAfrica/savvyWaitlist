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

const { publicRuntimeConfig } = getConfig()
const baseUrl = `${publicRuntimeConfig.apiUrl}/auth`
const userSubject = new BehaviorSubject(
  typeof window !== 'undefined' ? handleGetItem() : null
)

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

async function login(user: IFormValues) {
  const userLogin = await fetchWrapper.post(`${baseUrl}/login`, user)
  // publish user to subscribers and store in local storage to stay logged in between page refreshes
  userSubject.next(userLogin)

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
  return fetchWrapper.post(`${baseUrl}/register`, user)
}

async function update(params: any) {
  const userUpdate = await fetchWrapper.put(`${baseUrl}/users/account`, params)
  // update stored user if the logged in user updated their own record

  // update local storage
  const user = { ...userSubject.value, ...params }

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

function getAll() {
  return fetchWrapper.get(baseUrl)
}

function getById(id: any) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}
