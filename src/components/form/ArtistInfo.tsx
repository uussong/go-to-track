import { useState } from 'react'
import { css } from '@emotion/react'
import { ArtistData } from '@/models/artist'
import { Skeleton } from '../shared/skeleton'
import { Text } from '../shared/text'

export interface ArtistInfoProps {
  data: ArtistData[]
}

export default function ArtistInfo({ data }: ArtistInfoProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <article css={articleStyles}>
      {isLoading && <Skeleton width={200} height={200} borderRadius={200} />}
      <img
        css={imgStyles(isLoading)}
        src={data[0].images[1].url}
        alt={data[0].name}
        onLoad={() => setIsLoading(false)}
      />
      <Text variant={'heading2'}>{data[0].name}</Text>
    </article>
  )
}

const articleStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const imgStyles = (isLoading: boolean) => css`
  display: ${isLoading ? `none` : `block`};
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`
