import axios from 'axios'

const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env

const tokenApi = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
})

tokenApi.interceptors.request.use(
  (request) => {
    const body = `grant_type=client_credentials&client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}`

    request.data = body

    return request
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  },
)

tokenApi.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error(error)
    return Promise.reject(error)
  },
)

export default tokenApi
