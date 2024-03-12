import { css } from '@emotion/react'
import { useGetAlbums } from '@/hooks/useGetAlbums'
import AlbumList from './AlbumList'
import { Button } from '../../shared/button'
import { Text } from '../../shared/text'

interface SelectAlbumProps {
  artistId: string
  onPrevious?: () => void
  onNext: (albumId: string) => void
}

export default function SelectAlbum({
  artistId,
  onPrevious,
  onNext,
}: SelectAlbumProps) {
  const { data } = useGetAlbums(artistId)

  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'}>수록곡 투표를 만들 앨범을 선택해주세요</Text>
      <AlbumList data={data} onNext={onNext} />
      {onPrevious && (
        <Button variant={'secondary'} onClick={onPrevious}>
          가수 다시 검색하기
        </Button>
      )}
    </section>
  )
}

const sectionStyles = css`
  padding-top: 50px;
`
