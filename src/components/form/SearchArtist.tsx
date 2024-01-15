import { useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchArtistInfo } from '@/hooks/useSearchArtistInfo'
import ArtistInfo from './ArtistInfo'
import { FormDataProps } from '@/models/form'
import { useSetRecoilState } from 'recoil'
import { formIdState } from '@/stores/form'

export default function SearchArtist({ onNext }: { onNext: () => void }) {
  const setFormId = useSetRecoilState(formIdState)
  const [searchInput, setSearchInput] = useState('')
  const debouncedValue = useDebounce(searchInput)
  const { data, isLoading } = useSearchArtistInfo(debouncedValue)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSetArtist = (artistId: string) => {
    setFormId((prevData: FormDataProps) => ({
      ...prevData,
      artistId: artistId,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleNext = () => {
    onNext()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
      </form>
      {isLoading || data === undefined ? null : data.length === 0 ? (
        <p>찾는 가수가 없어요</p>
      ) : (
        <>
          <ArtistInfo data={data} />
          <button
            onClick={() => {
              handleSetArtist(data[0].id)
              handleNext()
            }}
          >
            맞아요
          </button>
        </>
      )}
    </>
  )
}
