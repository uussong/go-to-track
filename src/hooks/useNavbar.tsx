import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { navbarState } from '@/stores/navbar'

interface NavbarProps {
  left: React.ReactNode | null
  title: React.ReactNode | null
}

const useNavbar = () => {
  const [navbar, setNavbar] = useRecoilState(navbarState)

  const updateNavbar = useCallback(
    ({ left, title }: NavbarProps) => {
      setNavbar({ left, title })
    },
    [setNavbar],
  )

  return { navbar, updateNavbar }
}

export default useNavbar
