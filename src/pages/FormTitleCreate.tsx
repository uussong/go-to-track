import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { formTitleState } from '@/stores/form'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/title/EnterTitle'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'

export default function FormTitleCreatePage() {
  const setFormTitle = useSetRecoilState(formTitleState)
  const { updateNavbar } = useNavbar()
  useEffect(() => {
    updateNavbar({
      left: (
        <div css={navbarStyles}>
          <Link to={`/`} aria-label={'홈으로'}>
            <Text variant={'heading1'}>
              <Button variant={'secondary'} size={'icon'} icon={<LogoIcon />} />
            </Text>
          </Link>
          <Link to={`/myforms`}>
            <div css={myformsWrapperStyles}>
              <Text css={myformsStyles} variant={'heading2'}>
                My forms
              </Text>
            </div>
          </Link>
        </div>
      ),
      right: <SignOut />,
    })
  }, [updateNavbar])

  return (
    <PageLayout>
      <EnterTitle setFormTitle={(formTitle) => setFormTitle(formTitle)} />
    </PageLayout>
  )
}

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 100%;
`

const myformsWrapperStyles = css`
  height: 44px;
  padding: 12px 0;
`

const myformsStyles = css`
  font-size: 16px;
  line-height: 20px;
`
