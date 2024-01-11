import SearchArtist from '@/components/form/SearchArtist'
import SelectAlbum from '@/components/form/SelectAlbum'
import SelectTrack from '@/components/form/SelectTrack'
import PageLayout from '@/components/shared/PageLayout'
import { formState } from '@/stores/form'
import { useRecoilValue } from 'recoil'

export default function FormPage() {
  const formData = useRecoilValue(formState)
  const artistId = formData.artistId
  const albumId = formData.albumId

  return (
    <PageLayout>
      <SearchArtist />
      {artistId && <SelectAlbum artistId={artistId} />}
      {albumId && <SelectTrack albumId={albumId} />}
    </PageLayout>
  )
}
