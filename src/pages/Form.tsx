import { Suspense } from 'react'
import PageLayout from '@/components/shared/PageLayout'
import SearchArtist from '@/components/form/SearchArtist'
import SelectAlbum from '@/components/form/SelectAlbum'
import SelectTrack from '@/components/form/SelectTrack'
import Loading from '@/components/shared/Loading'

export default function FormPage() {
  return (
    <PageLayout>
      <SearchArtist />
      <Suspense fallback={<Loading />}>
        <SelectAlbum />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SelectTrack />
      </Suspense>
    </PageLayout>
  )
}
