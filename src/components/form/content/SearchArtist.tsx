import { ChangeEvent, FormEvent, useState } from 'react'
import { css } from '@emotion/react'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchArtist } from '@/hooks/useSearchArtist'
import ArtistInfo from './ArtistInfo'
import { Button } from '../../shared/button'
import { Text } from '../../shared/text'
import { flexColumnCenter } from '@/styles/mixins'
import { TextInput } from '@/components/shared/textInput'

interface SearchArtistProps {
  onNext: (artistId: string) => void
}

export default function SearchArtist({ onNext }: SearchArtistProps) {
  const [searchInput, setSearchInput] = useState('')
  const debouncedValue = useDebounce(searchInput)
  const { data, isLoading } = useSearchArtist(debouncedValue)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <section css={inputSectionStyles}>
        <Text variant={'heading2'}>원하는 가수를 검색해보세요</Text>
        <form css={formStyles} onSubmit={handleSubmit}>
          <TextInput
            label={'가수 검색'}
            value={searchInput}
            onChange={handleInput}
          />
        </form>
      </section>
      <section css={resultSectionStyles}>
        {isLoading ||
        data === undefined ||
        searchInput === '' ? null : data.length === 0 ? (
          <Text>원하는 가수가 없어요</Text>
        ) : (
          <>
            <ArtistInfo data={data} />
            <Text>원하는 가수가 맞나요?</Text>
            <Button
              onClick={() => {
                onNext(data[0].id)
              }}
            >
              맞아요
            </Button>
          </>
        )}
      </section>
    </>
  )
}

const inputSectionStyles = css`
  padding: 50px 0 25px;
`

const formStyles = css`
  padding-top: 20px;
`

const resultSectionStyles = css`
  ${flexColumnCenter}
  flex: 1;
  align-items: center;
  gap: 25px;
`
