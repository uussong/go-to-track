import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getArtistInfo } from '@/remote/spotify'
import { useDebounce } from '@/hooks/useDebounce'
import ArtistInfo from './ArtistInfo'

export default function SearchArtist() {
  const [searchInput, setSearchInput] = useState('')
  const debouncedValue = useDebounce(searchInput)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
      </form>
      {searchInput && <ArtistInfo data={data} isLoading={isLoading} />}
    </>
  )
}
