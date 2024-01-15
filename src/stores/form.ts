import { atom } from 'recoil'

export const formIdState = atom({
  key: 'formIdState',
  default: { artistId: '', albumId: '' },
})
