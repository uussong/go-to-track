import { useState } from 'react'
import PageLayout from '@/components/shared/PageLayout'
import SearchArtist from '@/components/form/SearchArtist'
import SelectAlbum from '@/components/form/SelectAlbum'
import SelectTrack from '@/components/form/SelectTrack'

export default function FormPage() {
  const [step, setStep] = useState<'가수검색' | '앨범선택' | '트랙선택'>(
    '가수검색',
  )
  return (
    <PageLayout>
      {step === '가수검색' && (
        <SearchArtist onNext={() => setStep('앨범선택')} />
      )}
      {step === '앨범선택' && (
        <SelectAlbum
          onPrevious={() => setStep('가수검색')}
          onNext={() => setStep('트랙선택')}
        />
      )}
      {step === '트랙선택' && (
        <SelectTrack onPrevious={() => setStep('앨범선택')} />
      )}
    </PageLayout>
  )
}
