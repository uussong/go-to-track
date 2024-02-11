import { ReactNode } from 'react'
import { atom } from 'recoil'

interface NavbarState {
  left: ReactNode
  title: ReactNode
  right: ReactNode
}

export const navbarState = atom<NavbarState>({
  key: 'navbarState',
  default: { left: null, title: null, right: null },
})
