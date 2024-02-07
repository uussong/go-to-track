import { useParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import FormDetail from '@/components/form/FormDetail'
import { FormDataFromServer } from '@/models/form'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'

export default function FormPage() {
  const { formId } = useParams()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromServer
  }
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  return (
    <PageLayout>
      <FormDetail form={form} artist={artist} album={album} />
    </PageLayout>
  )
}
