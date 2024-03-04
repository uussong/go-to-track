import { useSuspenseQuery } from '@tanstack/react-query'
import { User } from 'firebase/auth'
import { getUserFormList } from '@/remote/form'
import { useUser } from './useUser'

export const useGetUserFormList = () => {
  const user = useUser()
  return useSuspenseQuery({
    queryKey: ['formList', user],
    queryFn: () => getUserFormList(user as User),
  })
}
