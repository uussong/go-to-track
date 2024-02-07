import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'

interface FormEnterProps {
  formTitle: string
  onNext: () => void
}

export default function FormEnter({ formTitle, onNext }: FormEnterProps) {
  return (
    <>
      <Text variant={'heading2'}>{formTitle}</Text>
      <Button onClick={onNext}>시작하기</Button>
    </>
  )
}
