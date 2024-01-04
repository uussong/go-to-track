import { signInWithRedirect } from 'firebase/auth'
import { css } from '@emotion/react'
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
      <Button
        css={styles}
        variant={'secondary'}
        size={'fill'}
        onClick={handleGoogleSignIn}
      >
        Google로 시작하기
      </Button>
    </>
  )
}

const styles = css`
  position: relative;

  &:hover::before {
    filter: grayscale(20%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background-image: url('/images/google.png');
    background-size: cover;
    background-position: center;
  }
`
