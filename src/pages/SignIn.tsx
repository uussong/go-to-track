import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/hooks/useUser'
import { getGoogleRedirectResult } from '@/remote/auth'
import Loading from '@/components/shared/Loading'
import GoogleSignIn from '@/components/signin/GoogleSignIn'
import PageLayout from '@/components/shared/PageLayout'
import { flexCenter } from '@/styles/mixins'
import { css } from '@emotion/react'

export default function SignInPage() {
  const navigate = useNavigate()
  const user = useUser()
  const [hasResult, setHasResult] = useState(false)

  useEffect(() => {
    const getRedirectResult = async () => {
      try {
        const result = await getGoogleRedirectResult()
        if (result) {
          navigate('/myforms')
          setHasResult(true)
        }
        if (result === null) {
          setHasResult(false)
        }
      } catch (error) {
        alert('로그인을 다시 시도해 주세요.') // 변경 예정
      }
    }
    getRedirectResult()
  }, [navigate])

  if (hasResult === false && user) {
    return <Loading />
  }

  return (
    <PageLayout styles={styles}>
      <h1>지금 바로 시작해보세요</h1>
      <GoogleSignIn />
    </PageLayout>
  )
}

const styles = css`
  ${flexCenter}
`
