import { atom } from 'recoil'

export const formState = atom({
  key: 'formState',
  default: { artistId: '', albumId: '' },
})
