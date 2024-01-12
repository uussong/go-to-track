import { useGetAlbums } from '@/hooks/useGetAlbums'
import AlbumList from './AlbumList'

export default function SelectAlbum({ artistId }: { artistId: string }) {
  const { data } = useGetAlbums(artistId)

  return <>{data && <AlbumList data={data} />}</>
}
