import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { saveFormData } from '@/remote/form'
import { FormIdData } from '@/models/form'
import { useUser } from '@/hooks/useUser'
import { formDataState } from '@/stores/form'
import { Button } from '../shared/button'

interface CompleteButtonProps {
  formIdData: FormIdData
}

export default function CompleteButton({ formIdData }: CompleteButtonProps) {
  const formTitle = useRecoilValue(formDataState)
  const navigate = useNavigate()
  const user = useUser()
  const formData = {
    ...formIdData,
    ...formTitle,
  }

  const handleClick = () => {
    if (user && formData) {
      try {
        saveFormData(user, formData)
        navigate(`/myforms`)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return <Button onClick={handleClick}>완성</Button>
}
