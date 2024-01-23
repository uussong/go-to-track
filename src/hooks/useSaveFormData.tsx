import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { User } from 'firebase/auth'
import { saveFormData } from '@/remote/form'
import { FormData } from '@/models/form'

interface SaveFormDataType {
  user: User
  formData: FormData
}

export const useSaveFormData = () => {
  const navigate = useNavigate()

  return useMutation<void, Error, SaveFormDataType>({
    mutationFn: ({ user, formData }) => saveFormData(user, formData),
    onSuccess: () => navigate(`/myforms`),
    onError: (error) => console.error(error),
  })
}
