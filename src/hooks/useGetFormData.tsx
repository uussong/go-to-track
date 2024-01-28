import { User } from 'firebase/auth'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getFormDataById } from '@/remote/form'

export const useGetFormData = (user: User, formId: string) => {
  return useSuspenseQuery({
    queryKey: ['formData', user, formId],
    queryFn: () => getFormDataById(user, formId),
  })
}
