import { useQuery } from '@tanstack/react-query'
import { getArtistInfo } from '@/remote/spotify'

export const useSearchArtistInfo = (debouncedValue: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['search', debouncedValue],
    queryFn: () => getArtistInfo(debouncedValue),
    enabled: debouncedValue !== '',
    select: (data) =>
      data.artists.items.filter((artist: any) =>
        artist.genres.some(
          (genre: any) => genre.includes('k-pop') || genre.includes('korean'),
        ),
      ),
  })

  return { data, isLoading }
}
