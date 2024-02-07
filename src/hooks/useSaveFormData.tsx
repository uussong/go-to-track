import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { User } from 'firebase/auth'
import { saveFormData } from '@/remote/form'
import { FormDataFromUser } from '@/models/form'
import { useUser } from './useUser'

interface SaveFormDataType {
  formData: FormDataFromUser
}

export const useSaveFormData = () => {
  const navigate = useNavigate()
  const user = useUser()

  return useMutation<void, Error, SaveFormDataType>({
    mutationFn: ({ formData }) => saveFormData(user as User, formData),
    onSuccess: () => navigate(`/myforms`),
    onError: (error) => console.error(error),
  })
}
