import { useQuery } from '@tanstack/react-query'
import { getAlbums } from '@/remote/spotify'

export const useGetAlbums = (artistId: string) => {
  const { data } = useQuery({
    queryKey: ['album', artistId],
    queryFn: () => getAlbums(artistId),
    select: (data) => data?.items,
  })

  return { data }
}
