import { useRecoilValue } from 'recoil'
import { formIdState } from '@/stores/form'
import { useGetAlbums } from '@/hooks/useGetAlbums'
import AlbumList from './AlbumList'

export default function SelectAlbum({ onNext }: { onNext: () => void }) {
  const formId = useRecoilValue(formIdState)
  const artistId = formId.artistId
  const { data } = useGetAlbums(artistId)

  return <>{data && <AlbumList data={data} onNext={onNext} />}</>
}
