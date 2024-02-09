import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import FormDetail from '@/components/form/FormDetail'
import { FormData } from '@/models/form'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import useNavbar from '@/hooks/useNavbar'

export default function FormPage() {
  const { formId } = useParams()
  const { updateNavbar } = useNavbar()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormData
  }
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  useEffect(() => {
    updateNavbar({ left: <Link to={`/myforms`}>My forms</Link>, title: null })
  }, [updateNavbar])

  return (
    <PageLayout>
      <FormDetail form={form} artist={artist} album={album} />
    </PageLayout>
  )
}
