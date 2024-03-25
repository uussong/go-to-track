import { useState } from 'react'
import { css } from '@emotion/react'
import { ArtistData } from '@/models/artist'
import { Skeleton } from '../../shared/skeleton'
import { Text } from '../../shared/text'

export interface ArtistInfoProps {
  data: ArtistData[]
}

export default function ArtistInfo({ data }: ArtistInfoProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <article css={articleStyles}>
      <div css={imgWrapperStyles}>
        {isLoading && <Skeleton width={300} height={300} borderRadius={300} />}
        <img
          css={imgStyles(isLoading)}
          src={data[0].images[1].url}
          alt={data[0].name}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <Text variant={'heading3'}>{data[0].name}</Text>
    </article>
  )
}

const articleStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`

const imgWrapperStyles = css`
  width: 300px;
  height: 300px;

  @media (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`

const imgStyles = (isLoading: boolean) => css`
  display: ${isLoading ? `none` : `block`};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`
