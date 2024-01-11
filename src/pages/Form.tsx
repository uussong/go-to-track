import SearchArtist from '@/components/form/SearchArtist'
import SelectAlbum from '@/components/form/SelectAlbum'
import PageLayout from '@/components/shared/PageLayout'
import { formState } from '@/stores/form'
import { useRecoilValue } from 'recoil'

export default function FormPage() {
  const formData = useRecoilValue(formState)
  const artistId = formData.artistId

  return (
    <PageLayout>
      <SearchArtist />
      {artistId && <SelectAlbum artistId={artistId} />}
    </PageLayout>
  )
}
