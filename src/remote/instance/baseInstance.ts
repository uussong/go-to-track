import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
})

api.interceptors.request.use(
  (request) => {
    request.headers.Authorization = `Bearer ${localStorage.getItem(
      'access_token',
    )}`
    return request
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  },
)

export default api
