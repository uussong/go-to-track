import { css } from '@emotion/react'
import { useGetAlbums } from '@/hooks/useGetAlbums'
import AlbumList from './AlbumList'
import { Button } from '../shared/button'
import { Text } from '../shared/text'

interface SelectAlbumProps {
  artistId: string
  onPrevious: () => void
  onNext: (albumId: string) => void
}

export default function SelectAlbum({
  artistId,
  onPrevious,
  onNext,
}: SelectAlbumProps) {
  const { data } = useGetAlbums(artistId)

  return (
    <>
      <Button variant={'secondary'} onClick={onPrevious}>
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
