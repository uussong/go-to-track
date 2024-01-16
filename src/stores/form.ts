import { atom } from 'recoil'

export const formIdState = atom({
  key: 'formIdState',
  default: { artistId: '', albumId: '' },
})

export const formDataState = atom({
  key: 'formDataState',
  default: { formTitle: '' },
})
