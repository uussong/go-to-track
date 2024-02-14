import { useSuspenseQuery } from '@tanstack/react-query'
import { getAlbums } from '@/remote/spotify'

export const useGetAlbums = (artistId: string) => {
  return useSuspenseQuery({
    queryKey: ['album', artistId],
    queryFn: () => getAlbums(artistId),
    select: (data) => data?.items,
  })
}
