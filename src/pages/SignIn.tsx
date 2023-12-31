import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@/hooks/useUser'
import { getGoogleRedirectResult } from '@/remote/auth'
import Loading from '@/components/shared/Loading'
import GoogleSignIn from '@/components/signin/GoogleSignIn'

export default function SignInPage() {
  const navigate = useNavigate()
  const user = useUser()

  useEffect(() => {
    const getRedirectResult = async () => {
      try {
        const result = await getGoogleRedirectResult()

        if (result) {
          navigate('/myforms')
        }
      } catch (error) {
        alert('로그인을 다시 시도해 주세요.') // 변경 예정
      }
    }
    getRedirectResult()
  }, [navigate])

  if (user) {
    return <Loading />
  }

  return (
    <>
      <h1>지금 바로 시작해보세요</h1>
      <GoogleSignIn />
    </>
  )
}
