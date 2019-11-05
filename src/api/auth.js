import { METHODS, API_URIS, apiCall } from './config'
import { getCookies } from '../utils/cookies'
import { CONFIG_COOKIES } from '../config/cookies'

export const authApi = {
  login: data => apiCall(METHODS.POST, API_URIS.AUTH, 'v2/auth', data),
  loginViaCanfazz: data => apiCall(METHODS.POST, API_URIS.CANFAZZ, 'v1/user/login', data, {}, { 'Authn-Client-ID': process.env.REACT_APP_CLIENT_ID }),
  whois: () => apiCall(METHODS.GET, API_URIS.CANFAZZ, 'v1/whois', {}, {}, { 'Authorization': `Bearer ${getCookies(CONFIG_COOKIES.TOKEN_CANFAZZ)}` })
}
