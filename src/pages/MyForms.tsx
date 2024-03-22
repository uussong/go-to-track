import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import useNavbar from '@/hooks/useNavbar'
import MyFormList from '@/components/myForms/MyFormList'
import { useGetUserFormList } from '@/hooks/useGetUserFormList'
import SignOut from '@/components/shared/SignOut'
import { Text } from '@/components/shared/text'
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'

export default function MyFormsPage() {
  const { data } = useGetUserFormList()

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
          <div css={myformsWrapperStyles}>
            <Text css={myformsStyles} variant={'heading2'}>
              My forms
            </Text>
          </div>
        </div>
      ),
      right: <SignOut />,
    })
  }, [updateNavbar])

  return (
    <PageLayout>
      <section css={sectionStyles}>
        <Link to={`/form/create/title`}>
          <Button>새로운 투표 만들기</Button>
        </Link>
        <MyFormList data={data} />
      </section>
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

const sectionStyles = css`
  padding-top: 50px;
`
