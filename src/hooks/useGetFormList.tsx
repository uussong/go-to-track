import { useSuspenseQuery } from '@tanstack/react-query'
import { User } from 'firebase/auth'
import { getFormList } from '@/remote/form'
import { useUser } from './useUser'

export const useGetFormList = () => {
  const user = useUser()

  return useSuspenseQuery({
    queryKey: ['formList', user],
    queryFn: () => getFormList(user as User),
  })
}
