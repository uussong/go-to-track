import { Dispatch, SetStateAction } from 'react'

export interface FormDataProps {
  artistId: string
  albumId: string
}

export type SetFormDataProps = Dispatch<SetStateAction<FormDataProps>>
