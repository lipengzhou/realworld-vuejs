import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  validateStatus (status) {
    return status >= 200 && status < 300
  }
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
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
