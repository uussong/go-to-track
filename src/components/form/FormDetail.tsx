import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { ArtistData } from '@/models/artist'
import { FormDataFromServer } from '@/models/form'
import { Text } from '../shared/text'
import { SingleAlbumData } from '@/models/album'
import { Button } from '../shared/button'
import { colors } from '@/styles/colors'
import { useUpdateFormData } from '@/hooks/useUpdateFormData'
import { flexCenter, flexColumn } from '@/styles/mixins'
import { useModal } from '@/hooks/useModal'
import { Modal } from '../shared/modal'
import { Checkbox } from '../shared/checkbox'

interface formDetailProps {
  form: FormDataFromServer
  artist: ArtistData
  album: SingleAlbumData
}

export default function FormDetail({ form, artist, album }: formDetailProps) {
  const [title, setTitle] = useState('')

  const tracks = album.tracks.items

  const navigate = useNavigate()
  const { formId } = useParams()

  const { mutate } = useUpdateFormData()
  const { isOpen, openModal, closeModal } = useModal()

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

  const handleBlur = () => {
    if (title !== form.formTitle) {
      const updatedFormData = {
        ...form,
        formTitle: title === '' ? form.formTitle : title,
      }
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
        onBlur={handleBlur}
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
            <Button variant={'primary'} onClick={openModal}>
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

      {isOpen && (
        <Modal.Portal>
          <Modal onClick={closeModal}>
            <Modal.Body>
              <ul css={listStyles}>
                {tracks.map((track) => (
                  <Checkbox
                    index={track.track_number}
                    label={track.name}
                    checked={false}
                    onClick={() => {}}
                  />
                ))}
              </ul>
            </Modal.Body>
            <Modal.Actions
              primary={'확인'}
              onAction={closeModal}
            ></Modal.Actions>
          </Modal>
        </Modal.Portal>
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

const listStyles = css`
  ${flexColumn}
  gap: 5px;
`
