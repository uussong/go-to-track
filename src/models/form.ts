import { Timestamp } from 'firebase/firestore'

export interface FormData {
  albumId: string
  artistId: string
  formTitle: string
  timestamp: Timestamp
}
