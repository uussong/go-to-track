import { useRecoilValue } from 'recoil'
import { formIdState } from '@/stores/form'
import { useGetAlbums } from '@/hooks/useGetAlbums'
import AlbumList from './AlbumList'
import { Button } from '../shared/button'

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
      {data && <AlbumList data={data} onNext={onNext} />}
    </>
  )
}
