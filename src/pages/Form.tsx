import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import FormDetail from '@/components/form/FormDetail'
import { FormData } from '@/models/form'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import useNavbar from '@/hooks/useNavbar'
import { Button } from '@/components/shared/button'
import { useDeleteFormData } from '@/hooks/useDeleteFormData'
import DeleteConfirmModal from '@/components/form/DeleteConfirmModal'

export default function FormPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { formId } = useParams()
  const { updateNavbar } = useNavbar()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormData
  }
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen])

  const { mutate } = useDeleteFormData()

  const handleDeleteFormClick = () => {
    mutate()
  }

  useEffect(() => {
    updateNavbar({
      left: <Link to={`/myforms`}>My forms</Link>,
      right: (
        <Button variant={'secondary'} onClick={handleModalOpen}>
          삭제
        </Button>
      ),
    })
  }, [updateNavbar, handleModalOpen])

  return (
    <PageLayout>
      <FormDetail form={form} artist={artist} album={album} />
      {isModalOpen && (
        <DeleteConfirmModal
          handleModalOpen={() => setIsModalOpen(!isModalOpen)}
          onDelete={handleDeleteFormClick}
        />
      )}
    </PageLayout>
  )
}
