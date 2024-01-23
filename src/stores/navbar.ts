import { atom } from 'recoil'

interface NavbarState {
  left: React.ReactNode | null
  title: React.ReactNode | null
}

export const navbarState = atom<NavbarState>({
  key: 'navbarState',
  default: { left: null, title: null },
})
