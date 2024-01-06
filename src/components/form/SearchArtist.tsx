import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getArtistInfo } from '@/remote/spotify'
import { useDebounce } from '@/hooks/useDebounce'

export default function SearchArtist() {
  const [searchInput, setSearchInput] = useState('')
  const debouncedValue = useDebounce(searchInput)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const { data } = useQuery({
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
      {data && (
        <>
          <img
            src={data[0]?.images[1] && data[0]?.images[1].url}
            alt={data[0]?.name}
          />
          <p>{data[0]?.name}</p>
        </>
      )}
    </>
  )
}
