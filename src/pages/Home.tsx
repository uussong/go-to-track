import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import { useUser } from '@/hooks/useUser'
import useNavbar from '@/hooks/useNavbar'
import { flexCenter } from '@/styles/mixins'
import SignOut from '@/components/shared/SignOut'

export default function HomePage() {
  const user = useUser()
  const { updateNavbar } = useNavbar()

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
    </PageLayout>
  )
}

const styles = css`
  ${flexCenter}
`
