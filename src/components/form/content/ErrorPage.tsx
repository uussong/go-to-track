import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <>
      <Text>다시 시도해 주세요</Text>
      <Button onClick={() => navigate(-1)}>돌아가기</Button>
    </>
  )
}
