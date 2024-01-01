import { useUser } from '@/hooks/useUser'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const user = useUser()
  return (
    <>
      <Link to={user ? `myforms` : `signin`}>
        <button>지금 시작해보기</button>
      </Link>
    </>
  )
}
