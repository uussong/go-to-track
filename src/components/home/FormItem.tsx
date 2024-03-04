import { FormListData } from '@/models/form'
import { Text } from '../shared/text'
import { useGetVoteCount } from '@/hooks/useGetVoteCount'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'

interface FormItemProps {
  form: FormListData
}

export default function FormItem({ form }: FormItemProps) {
  const { data: count } = useGetVoteCount(form.id)
  const { data: artist } = useGetArtistInfo(form.data.artistId)
  const { data: album } = useGetAlbumInfo(form.data.albumId)

  return (
    <article>
      <Text variant={'heading3'}>{form.data.formTitle}</Text>
      <Text>{artist.name}</Text>
      <Text>{album.name}</Text>
      <Text variant={'detail'}>참여 {count}</Text>
    </article>
  )
}
