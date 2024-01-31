import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'

export default function ErrorPage() {
  return (
    <>
      <Text>다시 시도해 주세요</Text>
      <Button onClick={() => window.location.reload()}>다시 시도하기</Button>
    </>
  )
}
