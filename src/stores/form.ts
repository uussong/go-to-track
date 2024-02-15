import { atom, AtomEffect } from 'recoil'
import { VoteData } from '@/models/vote'

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const formTitleState = atom({
  key: 'formTitleState',
  default: '',
  effects: [localStorageEffect('formTitle')],
})

export const voteDataState = atom<VoteData>({
  key: 'voteDataState',
  default: { nickname: '', vote: { albumId: '', selectedTrack: [] } },
  effects: [localStorageEffect('voteData')],
})
