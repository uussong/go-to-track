import { signInWithRedirect } from 'firebase/auth'
import { auth, provider } from '@/remote/firebase'
import { Button } from '../shared/button'

export default function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithRedirect(auth, provider)
    } catch (error) {
      alert('로그인을 다시 시도해 주세요.') // 변경 예정
    }
  }

  return (
    <>
      <Button variant={'secondary'} size={'fill'} onClick={handleGoogleSignIn}>
        Google로 시작하기
      </Button>
    </>
  )
}
