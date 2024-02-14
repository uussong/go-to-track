import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import useNavbar from '@/hooks/useNavbar'
import { useUser } from '@/hooks/useUser'
import { flexCenter } from '@/styles/mixins'
import { css } from '@emotion/react'

export default function HomePage() {
  const user = useUser()
  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({ left: <Link to={``}>Home</Link>, title: null })
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
