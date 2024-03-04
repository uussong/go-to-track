import { Link } from 'react-router-dom'
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
  console.log(album)
  return (
    <article>
      <Link to={`/vote/${form.id}`}>
        <div css={formItemContentStyles}>
          <Text variant={'heading3'}>{form.data.formTitle}</Text>
          <div css={InfoStyles}>
            <div>
              <Text>{artist.name}</Text>
              <Text variant={'bodyStrong'}>{album.name}</Text>
            </div>
            <img src={album.images[1].url} alt={album.name} css={imageStyles} />
          </div>
          <Text variant={'detail'}>{count}명 참여 중</Text>
        </div>
      </Link>
    </article>
  )
}

const formItemContentStyles = css`
  width: 100%;
  border: 1px solid ${colors.gray100};
  border-radius: 4px;
  padding: 20px;
  margin: 10px 0;
`

const InfoStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`

const imageStyles = css`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`
