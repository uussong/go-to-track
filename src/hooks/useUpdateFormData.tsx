import { useMutation } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { updateFormData } from '@/remote/form'
import { FormDataFromServer } from '@/models/form'

interface UpdateFormDataType {
  updatedFormData: FormDataFromServer
}

export const useUpdateFormData = () => {
  const { formId } = useParams()

  if (!formId) {
    throw new Error('formId가 존재하지 않습니다.')
  }

  return useMutation<void, Error, UpdateFormDataType>({
    mutationFn: ({ updatedFormData }) =>
      updateFormData(formId, updatedFormData),
    onError: (error) => console.error(error),
  })
}
