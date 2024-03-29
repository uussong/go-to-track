import { useState } from 'react'
import { css } from '@emotion/react'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { FormDataFromUser } from '@/models/form'
import { flexColumnCenter } from '@/styles/mixins'
import { Skeleton } from '@/components/shared/skeleton'

interface FormInfoProps {
  form: FormDataFromUser
  onNext: () => void
}

export default function FormInfo({ form, onNext }: FormInfoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  return (
    <section css={sectionStyles}>
      <div css={divStyles}>
        <Text variant={'heading3'}>{artist.name}</Text>
        <Text css={textStyles} variant={'heading2'}>
          {album.name}
        </Text>
        <div css={imageWrapperStyles}>
          {isLoading && <Skeleton borderRadius={10} />}
          <img
            css={imageStyles(isLoading)}
            src={album.images[1].url}
            alt={album.name}
            onLoad={() => setIsLoading(false)}
          />
        </div>
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
  ${flexColumnCenter}
  gap: 25px;
`

const imageWrapperStyles = css`
  width: 300px;
  height: 300px;

  @media (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`

const imageStyles = (isLoading: boolean) => css`
  display: ${isLoading ? `none` : `block`};
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`

const textStyles = css`
  text-align: center;
`
