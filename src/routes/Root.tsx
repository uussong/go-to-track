import SignOut from '@/components/shared/SignOut'
import { useUser } from '@/hooks/useUser'
import { colors } from '@/styles/colors'
import { css } from '@emotion/react'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  const user = useUser()
  return (
    <>
      <header css={headerStyles}>
        <nav css={navStyles}>
          <ul css={ulStyles}>
            <li>
              <Link to={``}>Home</Link>
            </li>
            {user && <SignOut />}
          </ul>
        </nav>
      </header>
      <Outlet />
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
