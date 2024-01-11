import { useMutation } from '@tanstack/react-query'
import { User } from 'firebase/auth'
import { deleteFormData } from '@/remote/form'
import { useUser } from './useUser'
import { useNavigate, useParams } from 'react-router-dom'

export const useDeleteFormData = () => {
  const user = useUser()
  const { formId } = useParams()
  const navigate = useNavigate()

  if (formId === undefined) {
    throw new Error('formId가 없습니다.')
  }

  return useMutation({
    mutationFn: () => deleteFormData(user as User, formId),
    onSuccess: () => navigate(`/myforms`),
    onError: (error) => console.error(error),
  })
}
