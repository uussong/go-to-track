import { useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchArtist } from '@/hooks/useSearchArtist'
import ArtistInfo from './ArtistInfo'

export default function SearchArtist() {
  const [searchInput, setSearchInput] = useState('')
  const debouncedValue = useDebounce(searchInput)
  const { data, isLoading } = useSearchArtist(debouncedValue)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
      </form>
      {isLoading || data === undefined ? null : data.length === 0 ? (
        <p>찾는 가수가 없어요</p>
      ) : (
        <ArtistInfo data={data} />
      )}
    </>
  )
}
