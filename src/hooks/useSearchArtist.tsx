import { useQuery } from '@tanstack/react-query'
import { searchArtist } from '@/remote/spotify'

export const useSearchArtist = (debouncedValue: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['search', debouncedValue],
    queryFn: () => searchArtist(debouncedValue),
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
