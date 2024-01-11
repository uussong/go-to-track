import { MouseEventHandler, useEffect } from 'react'
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

export default function FormPage() {
  const { formId } = useParams()
  const { updateNavbar } = useNavbar()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormData
  }
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  const { mutate } = useDeleteFormData()

  useEffect(() => {
    const handleDeleteFormClick: MouseEventHandler<HTMLButtonElement> = () => {
      mutate()
    }
    updateNavbar({
      left: <Link to={`/myforms`}>My forms</Link>,
      right: (
        <Button variant={'secondary'} onClick={handleDeleteFormClick}>
          삭제
        </Button>
      ),
    })
  }, [updateNavbar, mutate])

  return (
    <PageLayout>
      <FormDetail form={form} artist={artist} album={album} />
    </PageLayout>
  )
}
