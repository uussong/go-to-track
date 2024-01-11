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

export const getArtistInfo = async (searchInput: string) => {
  const accessToken = localStorage.getItem('access_token')

  const { data } = await axios.get(
    `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  return data
}

export const getAlbums = async (artistId: string) => {
  const accessToken = localStorage.getItem('access_token')

  const { data } = await axios.get(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album,single&limit=50`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  return data
}
