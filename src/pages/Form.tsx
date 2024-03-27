import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import FormDetail from '@/components/form/FormDetail'
import { FormDataFromServer } from '@/models/form'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import useNavbar from '@/hooks/useNavbar'
import { Button } from '@/components/shared/button'
import { useDeleteFormData } from '@/hooks/useDeleteFormData'
import { Modal } from '@/components/shared/modal'
import { useModal } from '@/hooks/useModal'
import { Text } from '@/components/shared/text'
import { ReactComponent as BackIcon } from '@/assets/icons/back.svg'

export default function FormPage() {
  const { formId } = useParams()
  const { updateNavbar } = useNavbar()
  const { isOpen, openModal, closeModal } = useModal()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromServer
  }
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  const { mutate } = useDeleteFormData()

  const handleFormDelete = () => {
    mutate()
  }

  useEffect(() => {
    updateNavbar({
      left: (
        <div css={navbarStyles}>
          <Link to={`/myforms`}>
            <Button variant={'secondary'} size={'icon'} icon={<BackIcon />} />
          </Link>
        </div>
      ),
      right: (
        <Button variant={'secondary'} onClick={openModal}>
          삭제
        </Button>
      ),
    })
  }, [updateNavbar, openModal])

  return (
    <PageLayout>
      <FormDetail form={form} artist={artist} album={album} />

      {isOpen && (
        <Modal.Portal>
          <Modal onClick={closeModal}>
            <Modal.Body>
              <Text variant={'bodyStrong'} css={{ display: 'block' }}>
                정말 삭제하시겠습니까?
              </Text>
              <Text variant={'detail'}>삭제한 글은 복구할 수 없어요.</Text>
            </Modal.Body>
            <Modal.Actions
              primary={'삭제'}
              secondary={'돌아가기'}
              onAction={handleFormDelete}
              onClose={closeModal}
            ></Modal.Actions>
          </Modal>
        </Modal.Portal>
      )}
    </PageLayout>
  )
}

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 100%;
`
