import axios from 'axios'
import { getToken } from '@/utils/auth'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  validateStatus (status) {
    return status >= 200 && status < 300
  }
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (config.requireAuth) {
    // https://github.com/gothinkster/realworld/tree/master/api#authentication-header
    config.headers.Authorization = `Token ${getToken()}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
