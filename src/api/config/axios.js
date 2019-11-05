import axios from 'axios'
import { preRequestInterceptor, errorInterceptor } from './interceptors'
import { METHODS } from './index'

const instance = axios.create()
instance.interceptors.request.use(
  preRequestInterceptor,
  err => Promise.reject(err),
)
instance.interceptors.response.use(
  response => response,
  errorInterceptor,
)

export const call = (method, url, subUrl = '', data = {}, additionalConfig = {}, additionalHeaders = {}) => {
  const config = {
    baseURL: url,
    method,
    url: `${url}${subUrl}`,
    headers: {
      'Content-Type': 'application/json',
      'client-id': process.env.REACT_APP_CLIENT_ID,
      ...additionalHeaders,
    },
    ...additionalConfig,
  }
  if (method === METHODS.GET) {
    Object.keys(data).forEach(key => {
      if (data[key] === null || data[key] === "") {
        delete data[key];
      }
    });
    config.params = data;
  } else {
    config.data = data;
  }
  return instance.request(config)
}
