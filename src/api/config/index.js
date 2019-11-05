import { call } from './axios'

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
}

export const API_URIS = {
  AUTH: process.env.REACT_APP_AUTH_URI,
  TASK: process.env.REACT_APP_TASK_URI,
  CMS: process.env.REACT_APP_CMS_URI,
  GEO: process.env.REACT_APP_GEOFAZZ_API,
  CANFAZZ: process.env.REACT_APP_CANFAZZ_API,
}

export const apiCall = call
