import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import SearchArtist from '@/components/form/content/SearchArtist'
import SelectAlbum from '@/components/form/content/SelectAlbum'
import SelectTrack from '@/components/form/content/SelectTrack'

export default function FormContentCreatePage() {
  const [step, setStep] = useState<'가수검색' | '앨범선택' | '트랙선택'>(
    '가수검색',
  )
  const [searchParams, setSearchParams] = useSearchParams()
  const artistId = searchParams.get('artist') ?? ''
  const albumId = searchParams.get('album') ?? ''
  const formIdData = {
    artistId,
    albumId,
  }

  return (
    <PageLayout>
      {step === '가수검색' && (
        <SearchArtist
          onNext={(artistId) => {
            setStep('앨범선택')
            searchParams.set('artist', artistId)
            setSearchParams(searchParams)
          }}
        />
      )}
      {step === '앨범선택' && (
        <SelectAlbum
          artistId={artistId}
          onPrevious={() => {
            setStep('가수검색')
            searchParams.delete('artist')
            setSearchParams(searchParams)
          }}
          onNext={(albumId) => {
            setStep('트랙선택')
            searchParams.set('album', albumId)
            setSearchParams(searchParams)
          }}
        />
      )}
      {step === '트랙선택' && (
        <SelectTrack
          albumId={albumId}
          formIdData={formIdData}
          onPrevious={() => {
            setStep('앨범선택')
            searchParams.delete('album')
            setSearchParams(searchParams)
          }}
        />
      )}
    </PageLayout>
  )
}