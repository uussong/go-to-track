import { Button } from '@/components/shared/button'

interface FormEnterProps {
  onNext: () => void
}

export default function FormEnter({ onNext }: FormEnterProps) {
  return (
    <>
      <div>FormEnter</div>
      <Button onClick={onNext}>시작하기</Button>
    </>
  )
}
