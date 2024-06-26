import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { css } from '@emotion/react'
import useNavbar from '@/hooks/useNavbar'
import { colors } from '@/styles/colors'
import Loading from '@/components/shared/Loading'

export default function Root() {
  const { navbar } = useNavbar()

  return (
    <>
      <header css={headerStyles}>
        <nav css={navStyles}>
          <ul css={ulStyles}>
            <li>{navbar.left}</li>
            <li>{navbar.title}</li>
            <li>{navbar.right}</li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  )
}

const headerStyles = css`
  max-width: 768px;
  width: 100%;
  height: 64px;
  position: fixed;
  background-color: ${colors.white};
  padding: 10px 16px;
  z-index: 100;
`

const navStyles = css`
  height: 100%;
`

const ulStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  > li {
    height: 100%;
  }
`
