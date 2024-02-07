import { TrackData } from './track'
export interface AlbumData {
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

export interface SingleAlbumData {
  album_type: string
  artists: {
    external_urls: { spotify: string }
    herf: string
    id: string
    name: string
    type: string
    uri: string
  }[]
  available_markets: string[]
  copyrights: [text: string, type: string]
  external_ids: { upc: string }
  external_urls: { spotify: string }
  generes: []
  herf: string
  id: string
  images: { height: number; url: string; width: number }[]
  label: string
  name: string
  popularity: number
  release_date: string
  release_date_precision: string
  total_tracks: number
  tracks: {
    href: string
    items: TrackData[]
    limit: number
    next: null
    offset: number
    previous: null
    total: number
  }
  type: string
  uri: string
}
