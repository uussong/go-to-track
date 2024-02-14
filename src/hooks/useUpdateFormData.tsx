import { useMutation } from '@tanstack/react-query'
import { User } from 'firebase/auth'
import { useParams } from 'react-router-dom'
import { updateFormData } from '@/remote/form'
import { FormDataFromServer } from '@/models/form'
import { useUser } from './useUser'

interface UpdateFormDataType {
  updatedFormData: FormDataFromServer
}

export const useUpdateFormData = () => {
  const user = useUser()
  const { formId } = useParams()

  if (!formId) {
    throw new Error('formId가 존재하지 않습니다.')
  }

  return useMutation<void, Error, UpdateFormDataType>({
    mutationFn: ({ updatedFormData }) =>
      updateFormData(user as User, formId, updatedFormData),
    onError: (error) => console.error(error),
  })
}
