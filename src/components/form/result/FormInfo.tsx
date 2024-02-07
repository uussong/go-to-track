import { Button } from '@/components/shared/button'

interface FormInfoProps {
  onNext: () => void
}

export default function FormInfo({ onNext }: FormInfoProps) {
  return (
    <>
      <div>FormInfo</div>
      <Button onClick={onNext}>투표하기</Button>
    </>
  )
}
