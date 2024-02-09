import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react'
import { css } from '@emotion/react'
import { ArtistData } from '@/models/artist'
import { FormData } from '@/models/form'
import { Text } from '../shared/text'
import { SingleAlbumData } from '@/models/album'
import { Button } from '../shared/button'
import { colors } from '@/styles/colors'
import { useUpdateFormData } from '@/hooks/useUpdateFormData'
import { flexCenter } from '@/styles/mixins'
import { useNavigate, useParams } from 'react-router-dom'

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
  const navigate = useNavigate()
  const { formId } = useParams()

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

  const handleUpdateClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.step === 'artist') {
      navigate(`/form/edit/${formId}`)
    } else if (e.currentTarget.dataset.step === 'album') {
      navigate(`/form/edit/${formId}?artist=${form.artistId}`)
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
        <div css={infoArticleStyles}>
          <img css={imageStyles} src={artist.images[2].url} alt={artist.name} />
          <Text variant={'bodyStrong'}>{artist.name}</Text>
        </div>
        <Button
          variant={'secondary'}
          data-step={'artist'}
          onClick={handleUpdateClick}
        >
          수정
        </Button>
      </article>
      <div css={lineStyles}></div>
      <article css={articleStyles}>
        <div css={infoArticleStyles}>
          <img css={imageStyles} src={album.images[1].url} alt={album.name} />
          <div css={albumDetailStyles}>
            <Text variant={'bodyStrong'}>{album.name}</Text>
            <Button variant={'primary'} onClick={toggleTrackListVisible}>
              수록곡 보기
            </Button>
          </div>
        </div>
        <Button
          css={buttonStyles}
          variant={'secondary'}
          data-step={'album'}
          onClick={handleUpdateClick}
        >
          수정
        </Button>
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
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`

const infoArticleStyles = css`
  ${flexCenter}
  gap: 16px;
`

const lineStyles = css`
  border: 1px solid ${colors.gray100};
`

const imageStyles = css`
  width: 75px;
  height: 75px;
  border-radius: 10px;
`

const buttonStyles = css`
  min-width: 62px;
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
