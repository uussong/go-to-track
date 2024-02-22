import { useSuspenseQuery } from '@tanstack/react-query'
import { getFormVoteCount } from '@/remote/vote'

export const useGetVoteCount = (formId: string) => {
  return useSuspenseQuery({
    queryKey: ['voteCount', formId],
    queryFn: () => getFormVoteCount(formId),
  })
}
