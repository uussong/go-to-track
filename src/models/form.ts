import { Timestamp } from 'firebase/firestore'

export interface FormData {
  albumId: string
  artistId: string
  formTitle: string
  timestamp: Timestamp
}

export interface FormListData {
  id: string
  data: FormData
}
