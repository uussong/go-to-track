import { getAlbumInfo } from '@/remote/spotify'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useGetAlbumInfo = (albumId: string) => {
  return useSuspenseQuery({
    queryKey: ['albumInfo', albumId],
    queryFn: () => getAlbumInfo(albumId),
  })
}
