import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import useNavbar from '@/hooks/useNavbar'
import MyFormList from '@/components/myForms/MyFormList'
import { useGetUserFormList } from '@/hooks/useGetUserFormList'
import SignOut from '@/components/shared/SignOut'

export default function MyFormsPage() {
  const { data } = useGetUserFormList()

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({
      left: <Link to={`/myforms`}>My forms</Link>,
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

const sectionStyles = css`
  padding-top: 50px;
`
