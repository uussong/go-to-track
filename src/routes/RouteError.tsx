import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
      <h1>예상치 못한 일이 일어났어요!</h1>
      <Link to={`/`}>홈으로 돌아가기</Link>
    </>
  )
}
