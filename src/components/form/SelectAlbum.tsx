import { useRecoilValue } from 'recoil'
import { css } from '@emotion/react'
import { formIdState } from '@/stores/form'
import { useGetAlbums } from '@/hooks/useGetAlbums'
import AlbumList from './AlbumList'
import { Button } from '../shared/button'
import { Text } from '../shared/text'

interface SelectAlbumProps {
  onPrevious: () => void
  onNext: () => void
}

export default function SelectAlbum({ onPrevious, onNext }: SelectAlbumProps) {
  const formId = useRecoilValue(formIdState)
  const artistId = formId.artistId
  const { data } = useGetAlbums(artistId)

  const handlePrevious = () => {
    onPrevious()
  }

  return (
    <>
      <Button variant={'secondary'} onClick={handlePrevious}>
        이전
      </Button>
      <Text css={titleStyles} variant={'heading2'}>
        수록곡을 투표 할 앨범을 선택해주세요
      </Text>

      <AlbumList data={data} onNext={onNext} />
    </>
  )
}

const titleStyles = css`
  padding-bottom: 25px;
  text-align: center;
`
