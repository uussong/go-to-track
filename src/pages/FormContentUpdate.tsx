import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ConfirmTrack from '@/components/form/content/ConfirmTrack'
import SearchArtist from '@/components/form/content/SearchArtist'
import SelectAlbum from '@/components/form/content/SelectAlbum'
import PageLayout from '@/components/shared/PageLayout'

export default function FormContentUpdate() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [step, setStep] = useState<'가수검색' | '앨범선택' | '트랙확인'>(
    searchParams.get('artist') ? '앨범선택' : '가수검색',
  )

  const artistId = searchParams.get('artist') ?? ''
  const albumId = searchParams.get('album') ?? ''

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
            setStep('트랙확인')
            searchParams.set('album', albumId)
            setSearchParams(searchParams)
          }}
        />
      )}
      {step === '트랙확인' && (
        <ConfirmTrack
          albumId={albumId}
          onPrevious={() => {
            setStep('앨범선택')
            searchParams.delete('album')
            setSearchParams(searchParams)
          }}
          onComplete={() => {}}
        />
      )}
    </PageLayout>
  )
}
