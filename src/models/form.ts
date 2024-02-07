export interface FormData {
  albumId: string
  artistId: string
  formTitle: string
  timestamp: Date
}

export interface FormListData {
  id: string
  data: FormData
}

export interface FormIdData {
  artistId: string
  albumId: string
}
