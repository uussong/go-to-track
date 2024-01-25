import { getFormData } from '@/remote/form'
import { useSuspenseQuery } from '@tanstack/react-query'
import { User } from 'firebase/auth'

export const useGetFormList = (user: User) => {
  return useSuspenseQuery({
    queryKey: ['formList', user],
    queryFn: () => getFormData(user),
  })
}
