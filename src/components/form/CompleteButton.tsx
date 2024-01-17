import { Button } from '../shared/button'
import { saveFormData } from '@/remote/form'
import { FormData } from '@/models/form'
import { useNavigate } from 'react-router-dom'

interface CompleteButtonProps {
  formData: FormData
}

export default function CompleteButton({ formData }: CompleteButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (formData) {
      try {
        saveFormData(formData)
        navigate(`/myforms`)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return <Button onClick={handleClick}>완성</Button>
}
