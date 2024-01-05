import axios from 'axios'

export const getAccessToken = async () => {
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env
  const body = `grant_type=client_credentials&client_id=${REACT_APP_CLIENT_ID}&client_secret=${REACT_APP_CLIENT_SECRET}`

  const { data } = await axios.post(
    'https://accounts.spotify.com/api/token',
    body,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
  return data
}
