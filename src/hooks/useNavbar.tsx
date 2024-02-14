import { ReactNode, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { navbarState } from '@/stores/navbar'

interface NavbarProps {
  left: ReactNode
  title?: ReactNode
  right: ReactNode
}

const useNavbar = () => {
  const [navbar, setNavbar] = useRecoilState(navbarState)

  const updateNavbar = useCallback(
    ({ left, title, right }: NavbarProps) => {
      setNavbar({ left, title, right })
    },
    [setNavbar],
  )

  return { navbar, updateNavbar }
}

export default useNavbar
