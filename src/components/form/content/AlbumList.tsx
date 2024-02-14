import { useState } from 'react'
import { css } from '@emotion/react'
import { AlbumData } from '@/models/album'
import { Skeleton } from '../../shared/skeleton'
import { Text } from '../../shared/text'

interface AlbumListProps {
  data: AlbumData[]
  onNext: (albumId: string) => void
}

export default function AlbumList({ data, onNext }: AlbumListProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section css={sectionStyles}>
      {data.map((album: AlbumData) => (
        <article
          css={articleStyles}
          key={album.id}
          onClick={() => {
            onNext(album.id)
          }}
        >
          {isLoading && <Skeleton width={125} height={125} />}
          <img
            css={imgStyles(isLoading)}
            src={album.images[1].url}
            alt={album.name}
            onLoad={() => setIsLoading(false)}
          />
          <Text css={{ textAlign: 'center' }}>{album.name}</Text>
        </article>
      ))}
    </section>
  )
}

const sectionStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 13px;
`

const articleStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 165px;
`

const imgStyles = (isLoading: boolean) => css`
  display: ${isLoading ? `none` : `block`};
  width: 125px;
`
