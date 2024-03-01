import { useSuspenseQuery } from '@tanstack/react-query'
import { getRankedTrackVoteCounts } from '@/remote/vote'

export const useGetRankedTrackVoteCounts = (formId: string) => {
  return useSuspenseQuery({
    queryKey: ['rankedTrackVoteCounts', formId],
    queryFn: () => getRankedTrackVoteCounts(formId),
  })
}
