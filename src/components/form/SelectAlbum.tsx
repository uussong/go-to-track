import { useRecoilValue } from 'recoil'
import { formState } from '@/stores/form'
import { useGetAlbums } from '@/hooks/useGetAlbums'
import AlbumList from './AlbumList'

export default function SelectAlbum({ onNext }: { onNext: () => void }) {
  const formData = useRecoilValue(formState)
  const artistId = formData.artistId
  const { data } = useGetAlbums(artistId)

  return <>{data && <AlbumList data={data} onNext={onNext} />}</>
}
