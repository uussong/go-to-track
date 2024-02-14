export interface FormDataFromUser {
  albumId: string
  artistId: string
  formTitle: string
}

export interface FormDataFromServer {
  albumId: string
  artistId: string
  formTitle: string
  timestamp: Date
}

export interface FormListData {
  id: string
  data: FormDataFromServer
}

export interface FormIdData {
  artistId: string
  albumId: string
}
