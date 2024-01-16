import { ChangeEvent, FormEvent, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { css } from '@emotion/react'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchArtistInfo } from '@/hooks/useSearchArtistInfo'
import ArtistInfo from './ArtistInfo'
import { FormDataProps } from '@/models/form'
import { formIdState } from '@/stores/form'
import { Button } from '../shared/button'
import { Text } from '../shared/text'
import { flexColumn } from '@/styles/mixins'

export default function SearchArtist({ onNext }: { onNext: () => void }) {
  const setFormId = useSetRecoilState(formIdState)
  const [searchInput, setSearchInput] = useState('')
  const debouncedValue = useDebounce(searchInput)
  const { data, isLoading } = useSearchArtistInfo(debouncedValue)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSetArtist = (artistId: string) => {
    setFormId((prevData: FormDataProps) => ({
      ...prevData,
      artistId: artistId,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <>
      <section css={inputSectionStyles}>
        <Text variant={'heading2'}>원하는 가수를 검색해보세요</Text>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchInput} onChange={handleInput} />
        </form>
      </section>
      <section css={resultSectionStyles}>
        {isLoading || data === undefined ? null : data.length === 0 ? (
          <Text>찾는 가수가 없어요</Text>
        ) : (
          <>
            <ArtistInfo data={data} />
            <Text variant={'bodyStrong'}>찾는 가수가 맞나요?</Text>
            <Button
              onClick={() => {
                handleSetArtist(data[0].id)
                handleNext()
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
  padding-bottom: 25px;
`

const resultSectionStyles = css`
  ${flexColumn}
  align-items: center;
  gap: 25px;
  padding-top: 25px;
`
