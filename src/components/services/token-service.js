//import config from '../config'
import config from '../../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.API_TOKEN, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.API_TOKEN)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.API_TOKEN)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService
