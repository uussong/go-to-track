interface AlbumData {
  album_group: string
  album_type: string
  artists: [
    external_urls: { spotify: string },
    herf: string,
    id: string,
    name: string,
    type: string,
    uri: string,
  ]
  available_markets: string[]
  external_urls: { spotify: string }
  herf: string
  id: string
  images: { height: number; url: string; width: number }[]
  name: string
  release_data: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface AlbumListProps {
  data: AlbumData[]
}
