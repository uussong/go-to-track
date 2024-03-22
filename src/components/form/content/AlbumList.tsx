import { useState } from 'react'
import { css } from '@emotion/react'
import { AlbumData } from '@/models/album'
import { Skeleton } from '../../shared/skeleton'
import { Text } from '../../shared/text'
import { colors } from '@/styles/colors'

interface AlbumListProps {
  data: AlbumData[]
  onNext: (albumId: string) => void
}

export default function AlbumList({ data, onNext }: AlbumListProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div css={articleWrapperStyles}>
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
          <Text css={albumNameStyles} variant={'heading3'}>
            {album.name}
          </Text>
        </article>
      ))}
    </div>
  )
}

const articleWrapperStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10px 13px;
  padding: 25px 0;
`

const articleStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 165px;
  padding: 20px 10px;
  background-color: ${colors.gray100};
  border-radius: 10px;
  cursor: pointer;
`

const imgStyles = (isLoading: boolean) => css`
  display: ${isLoading ? `none` : `block`};
  width: 100px;
  border-radius: 4px;
`

const albumNameStyles = css`
  font-size: 16px;
  padding-top: 10px;
  text-align: center;
`
