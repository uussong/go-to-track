import { Button } from '../shared/button'

interface CompleteButtonProps {
  onComplete: () => void
}

export default function CompleteButton({ onComplete }: CompleteButtonProps) {
  const handleClick = () => {
    onComplete()
  }

  return <Button onClick={handleClick}>완료</Button>
}
