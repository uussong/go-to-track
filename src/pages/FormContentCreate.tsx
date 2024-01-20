import { useState } from 'react'
import PageLayout from '@/components/shared/PageLayout'
import SearchArtist from '@/components/form/content/SearchArtist'
import SelectAlbum from '@/components/form/content/SelectAlbum'
import SelectTrack from '@/components/form/content/SelectTrack'
import { FormIdData } from '@/models/form'

export default function FormContentCreatePage() {
  const [step, setStep] = useState<'가수검색' | '앨범선택' | '트랙선택'>(
    '가수검색',
  )
  const [formIdData, setFormIdData] = useState<FormIdData>({
    artistId: '',
    albumId: '',
  })

  return (
    <PageLayout>
      {step === '가수검색' && (
        <SearchArtist
          onNext={(artistId) => {
            setFormIdData((prevData) => ({ ...prevData, artistId }))
            setStep('앨범선택')
          }}
        />
      )}
      {step === '앨범선택' && (
        <SelectAlbum
          artistId={formIdData.artistId}
          onPrevious={() => setStep('가수검색')}
          onNext={(albumId) => {
            setFormIdData((prevData) => ({ ...prevData, albumId }))
            setStep('트랙선택')
          }}
        />
      )}
      {step === '트랙선택' && (
        <SelectTrack
          formIdData={formIdData}
          onPrevious={() => setStep('앨범선택')}
        />
      )}
    </PageLayout>
  )
}
