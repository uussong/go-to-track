export interface TrackData {
  artists: {
    external_urls: { spotify: string }
    href: string
    id: string
    name: string
    type: string
    uri: string
  }[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_urls: { spotify: string }
  href: string
  id: string
  is_local: boolean
  name: string
  preview_url: string
  track_number: number
  type: string
  uri: string
}
