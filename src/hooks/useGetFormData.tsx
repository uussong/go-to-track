import { useSuspenseQuery } from '@tanstack/react-query'
import { User } from 'firebase/auth'
import { getFormDataById } from '@/remote/form'
import { useUser } from './useUser'

export const useGetFormData = (formId: string) => {
  const user = useUser()

  return useSuspenseQuery({
    queryKey: ['formData', user, formId],
    queryFn: () => getFormDataById(user as User, formId),
  })
}
