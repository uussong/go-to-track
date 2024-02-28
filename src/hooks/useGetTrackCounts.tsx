import { useSuspenseQuery } from '@tanstack/react-query'
import { getSelectedTrackCounts } from '@/remote/vote'

export const useGetTrackCounts = (formId: string) => {
  return useSuspenseQuery({
    queryKey: ['trackCounts', formId],
    queryFn: () => getSelectedTrackCounts(formId),
  })
}
