import { ChangeEvent, Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { css } from '@emotion/react'
import Loading from '@/components/shared/Loading'
import SignOut from '@/components/shared/SignOut'
import { useUser } from '@/hooks/useUser'
import { colors } from '@/styles/colors'
import { formDataState } from '@/stores/form'
import { Text } from '@/components/shared/text'

export default function Root() {
  const user = useUser()
  const { pathname } = useLocation()
  const [formData, setFormData] = useRecoilState(formDataState)
  const formTitle = formData.formTitle

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ formTitle: e.target.value })
  }

  return (
    <>
      <header css={headerStyles}>
        <nav css={navStyles}>
          <ul css={ulStyles}>
            <li>
              {pathname === `/form` ? (
                <>
                  <Link to={`/myforms`}>My forms</Link>
                  <Text variant={'detail'}> / </Text>
                  <input
                    css={inputStyles}
                    type="text"
                    value={formTitle}
                    onChange={handleInput}
                  />
                </>
              ) : (
                <Link to={``}>Home</Link>
              )}
            </li>
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

const inputStyles = css`
  width: 150px;
`
