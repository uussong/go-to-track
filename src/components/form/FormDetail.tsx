import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { css } from '@emotion/react'
import { ArtistData } from '@/models/artist'
import { FormData } from '@/models/form'
import { Text } from '../shared/text'
import { SingleAlbumData } from '@/models/album'
import { Button } from '../shared/button'
import { colors } from '@/styles/colors'
import { useUpdateFormData } from '@/hooks/useUpdateFormData'

interface formDetailProps {
  form: FormData
  artist: ArtistData
  album: SingleAlbumData
}

export default function FormDetail({ form, artist, album }: formDetailProps) {
  const [title, setTitle] = useState('')
  const [isTrackListVisible, setIsTrackListVisible] = useState(false)
  const tracks = album.tracks.items
  const { mutate } = useUpdateFormData()

  const toggleTrackListVisible = () => {
    setIsTrackListVisible(!isTrackListVisible)
  }

  const handleTitleChange = (e: ChangeEvent<HTMLHeadingElement>) => {
    setTitle(e.target.innerText)
  }

  const handleEnterKey = async (e: KeyboardEvent<HTMLHeadingElement>) => {
    const updatedFormData = { ...form, formTitle: title }
    if (e.key === 'Enter') {
      e.preventDefault()
      mutate({ updatedFormData })
    }
  }

  return (
    <section>
      <Text
        variant={'heading2'}
        contentEditable={true}
        onInput={handleTitleChange}
        onKeyDown={handleEnterKey}
        suppressContentEditableWarning={true}
      >
        {form.formTitle}
      </Text>
      <article css={articleStyles}>
        <img css={imageStyles} src={artist.images[2].url} alt={artist.name} />
        <Text variant={'bodyStrong'}>{artist.name}</Text>
      </article>
      <div css={lineStyles}></div>
      <article css={albumArticleStyles}>
        <img css={imageStyles} src={album.images[1].url} alt={album.name} />
        <div css={albumDetailStyles}>
          <Text variant={'bodyStrong'}>{album.name}</Text>
          <Button variant={'primary'} onClick={toggleTrackListVisible}>
            수록곡 보기
          </Button>
        </div>
      </article>
      {isTrackListVisible && (
        <article css={trackArticleStyles}>
          <ul>
            {tracks.map((track) => (
              <li css={liStyles} key={track.id}>
                <Text>{track.name}</Text>
              </li>
            ))}
          </ul>
        </article>
      )}
    </section>
  )
}

const articleStyles = css`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 25px 0;
`

const albumArticleStyles = css`
  ${articleStyles}
  padding: 25px 0 0 0;
`

const lineStyles = css`
  border: 1px solid ${colors.gray100};
`

const imageStyles = css`
  width: 75px;
  height: 75px;
  border-radius: 10px;
`

const albumDetailStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
`

const trackArticleStyles = css`
  padding: 8px 0 0 100px;
`

const liStyles = css`
  padding: 5px 0 0 0;
`
