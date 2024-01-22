import toeknApi from './instance/tokenInstance'
import api from './instance/baseInstance'

export const getAccessToken = async () => {
  const { data } = await toeknApi.post('token')
  return data
}

export const getArtistInfo = async (searchInput: string) => {
  const { data } = await api.get(`search?q=${searchInput}&type=artist`)
  return data
}

export const getAlbums = async (artistId: string) => {
  const { data } = await api.get(
    `artists/${artistId}/albums?include_groups=album,single&limit=50`,
  )
  return data
}

export const getTracks = async (albumId: string) => {
  const { data } = await api.get(`albums/${albumId}/tracks`)
  return data
}
