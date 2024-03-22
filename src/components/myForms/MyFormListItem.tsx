import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Text } from '../shared/text'
import { Button } from '../shared/button'
import { colors } from '@/styles/colors'
import { FormDataFromServer } from '@/models/form'
import { useGetVoteCount } from '@/hooks/useGetVoteCount'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'

interface MyFormListItemProps {
  id: string
  form: FormDataFromServer
}

export default function MyFormListItem({ id, form }: MyFormListItemProps) {
  const { data: voteCount } = useGetVoteCount(id)
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  return (
    <div css={articleStyles}>
      <Link to={`/form/${id}`}>
        <div css={formInfoStyles}>
          <Text variant={'heading2'}>{form.formTitle}</Text>
          <div css={nameStyles}>
            <Text css={artistNameStyles} variant={'detail'}>
              {artist.name}
            </Text>
            <Text variant={'detail'}>{album.name}</Text>
          </div>
        </div>
      </Link>
      <div css={buttonGroupStyles}>
        <Link to={`/form/result/${id}`}>
          <Button variant={'secondary'}>결과 보기 {voteCount}</Button>
        </Link>
        <Link to={`/form/share/${id}`}>
          <Button variant={'secondary'}>공유하기</Button>
        </Link>
      </div>
    </div>
  )
}

const articleStyles = css`
  border: 2px solid ${colors.gray100};
  border-radius: 10px;
  padding: 4px;
  margin: 10px 0;
`

const formInfoStyles = css`
  padding: 16px 16px 8px;
`

const nameStyles = css`
  padding-top: 10px;
`

const artistNameStyles = css`
  ::after {
    content: '';
    display: inline-block;
    height: 10px;
    border-left: 1px solid ${colors.gray900};
    margin: 0 5px;
  }
`

const buttonGroupStyles = css`
  display: flex;
  gap: 10px;
  padding-bottom: 4px;
`
