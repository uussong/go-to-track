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
          <div css={imgWrapperStyles}>
            {isLoading && <Skeleton width={100} height={100} />}
            <img
              css={imgStyles(isLoading)}
              src={album.images[1].url}
              alt={album.name}
              onLoad={() => setIsLoading(false)}
            />
          </div>
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
  padding: 10px;
  margin: 25px 0;
`

const articleStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 5px;
  border: 1px solid ${colors.gray100};
  border-radius: 10px;
  cursor: pointer;
`

const imgWrapperStyles = css`
  width: 100px;
  height: 100px;
`

const imgStyles = (isLoading: boolean) => css`
  display: ${isLoading ? `none` : `block`};
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

const albumNameStyles = css`
  font-size: 16px;
  padding-top: 10px;
  text-align: center;
`
