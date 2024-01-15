import { Suspense } from 'react'
import { useRecoilValue } from 'recoil'
import SearchArtist from '@/components/form/SearchArtist'
import SelectAlbum from '@/components/form/SelectAlbum'
import SelectTrack from '@/components/form/SelectTrack'
import Loading from '@/components/shared/Loading'
import PageLayout from '@/components/shared/PageLayout'
import { formState } from '@/stores/form'

export default function FormPage() {
  const formData = useRecoilValue(formState)
  const artistId = formData.artistId
  const albumId = formData.albumId

  return (
    <PageLayout>
      <SearchArtist />
      <Suspense fallback={<Loading />}>
        {artistId && <SelectAlbum artistId={artistId} />}
      </Suspense>
      <Suspense fallback={<Loading />}>
        {albumId && <SelectTrack albumId={albumId} />}
      </Suspense>
    </PageLayout>
  )
}
