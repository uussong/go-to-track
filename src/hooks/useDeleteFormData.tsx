import { useMutation } from '@tanstack/react-query'
import { deleteFormData } from '@/remote/form'
import { useNavigate, useParams } from 'react-router-dom'

export const useDeleteFormData = () => {
  const { formId } = useParams()
  const navigate = useNavigate()

  if (formId === undefined) {
    throw new Error('formId가 없습니다.')
  }

  return useMutation({
    mutationFn: () => deleteFormData(formId),
    onSuccess: () => navigate(`/myforms`),
    onError: (error) => console.error(error),
  })
}
