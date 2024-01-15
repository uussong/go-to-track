import { useSuspenseQuery } from '@tanstack/react-query'
import { getTracks } from '@/remote/spotify'

export const useGetTracks = (albumId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['track', albumId],
    queryFn: () => getTracks(albumId),
    select: (data) => data.items,
  })

  return { data }
}
