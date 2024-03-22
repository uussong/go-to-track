import { useSuspenseQuery } from '@tanstack/react-query'
import { getVoteData } from '@/remote/vote'

export const useGetVoteData = (formId: string, userId: string) => {
  return useSuspenseQuery({
    queryKey: ['voteData', formId, userId],
    queryFn: () => getVoteData(formId, userId),
  })
}
