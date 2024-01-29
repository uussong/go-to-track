import { useParams } from 'react-router-dom'
import { User } from 'firebase/auth'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { useUser } from '@/hooks/useUser'
import FormDetail from '@/components/form/FormDetail'
import { FormData } from '@/models/form'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'

export default function FormPage() {
  const user = useUser()
  const { formId } = useParams()

  const { data: form } = useGetFormData(user as User, formId ?? '') as {
    data: FormData
  }
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  return (
    <PageLayout>
      <FormDetail form={form} artist={artist} album={album} />
    </PageLayout>
  )
}
