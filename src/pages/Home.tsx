import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <Link to={`signin`}>
        <button>지금 시작해보기</button>
      </Link>
    </>
  )
}
