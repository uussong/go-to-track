import { getArtistInfo } from '@/remote/spotify'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetArtistInfo = (artistId: string) => {
  return useSuspenseQuery({
    queryKey: ['artistInfo', artistId],
    queryFn: () => getArtistInfo(artistId),
  })
}
