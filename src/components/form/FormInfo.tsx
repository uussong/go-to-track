import { css } from '@emotion/react'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { FormData } from '@/models/form'
import { flexCenter } from '@/styles/mixins'

interface FormInfoProps {
  form: FormData
  onNext: () => void
}

export default function FormInfo({ form, onNext }: FormInfoProps) {
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  return (
    <section css={sectionStyles}>
      <div css={divStyles}>
        <Text variant={'heading3'}>{artist.name}</Text>
        <Text css={textStyles} variant={'heading2'}>
          {album.name}
        </Text>
        <img css={imageStyles} src={album.images[1].url} alt={album.name} />
      </div>
      <Button onClick={onNext}>투표하기</Button>
    </section>
  )
}

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
`

const divStyles = css`
  ${flexCenter}
  gap: 5px;
`

const imageStyles = css`
  display: block;
  border-radius: 10px;
`

const textStyles = css`
  text-align: center;
`
