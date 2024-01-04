import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import { useUser } from '@/hooks/useUser'
import { flexCenter } from '@/styles/mixins'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const user = useUser()
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
