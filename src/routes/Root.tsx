import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { css } from '@emotion/react'
import Loading from '@/components/shared/Loading'
import SignOut from '@/components/shared/SignOut'
import { useUser } from '@/hooks/useUser'
import { colors } from '@/styles/colors'
import Navbar from '@/components/shared/Navbar'

export default function Root() {
  const user = useUser()

  return (
    <>
      <header css={headerStyles}>
        <nav css={navStyles}>
          <ul css={ulStyles}>
            <Navbar />
            {user && <SignOut />}
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
  width: 100%;
  height: 72px;
  position: fixed;
  background-color: ${colors.white};
  padding: 0 16px;
`

const navStyles = css`
  height: 100%;
`

const ulStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
