import { Button } from '@/components/shared/button'
import { FormData } from '@/models/form'

interface FormInfoProps {
  form: FormData
  onNext: () => void
}

export default function FormInfo({ form, onNext }: FormInfoProps) {
  return (
    <>
      <div>FormInfo</div>
      <Button onClick={onNext}>투표하기</Button>
    </>
  )
}
