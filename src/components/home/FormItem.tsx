import { css } from '@emotion/react'
import { FormListData } from '@/models/form'
import { Text } from '../shared/text'
import { useGetVoteCount } from '@/hooks/useGetVoteCount'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { colors } from '@/styles/colors'

interface FormItemProps {
  form: FormListData
}

export default function FormItem({ form }: FormItemProps) {
  const { data: count } = useGetVoteCount(form.id)
  const { data: artist } = useGetArtistInfo(form.data.artistId)
  const { data: album } = useGetAlbumInfo(form.data.albumId)

  return (
    <article css={articleStyles}>
      <Text variant={'heading3'}>{form.data.formTitle}</Text>
      <Text css={artistNameStyles}>{artist.name}</Text>
      <Text>{album.name}</Text>
      <Text variant={'detail'}>참여 {count}</Text>
    </article>
  )
}

const articleStyles = css`
  width: 100%;
  border: 1px solid ${colors.gray100};
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
`

const artistNameStyles = css`
  margin-top: 10px;
`
