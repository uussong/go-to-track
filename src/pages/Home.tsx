import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import useNavbar from '@/hooks/useNavbar'
import { useUser } from '@/hooks/useUser'
import { flexCenter } from '@/styles/mixins'
import SignOut from '@/components/shared/SignOut'
import { useGetAllFormData } from '@/hooks/useGetAllFormData'
import AllFormList from '@/components/home/AllFormList'

export default function HomePage() {
  const user = useUser()
  const { updateNavbar } = useNavbar()
  const { data: formList } = useGetAllFormData()

  useEffect(() => {
    updateNavbar({
      left: <Link to={`/`}>Home</Link>,
      right: <SignOut />,
    })
  }, [updateNavbar])

  return (
    <PageLayout styles={styles}>
      <Link to={user ? `myforms` : `signin`}>
        <Button>지금 시작해보기</Button>
      </Link>
      <AllFormList formList={formList} />
    </PageLayout>
  )
}

const styles = css`
  ${flexCenter}
`
