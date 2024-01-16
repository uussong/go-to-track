import { useState } from 'react'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/EnterTitle'
import SearchArtist from '@/components/form/SearchArtist'
import SelectAlbum from '@/components/form/SelectAlbum'
import SelectTrack from '@/components/form/SelectTrack'

export default function FormPage() {
  const [step, setStep] = useState<
    '제목입력' | '가수검색' | '앨범선택' | '트랙선택'
  >('제목입력')

  return (
    <PageLayout>
      {step === '제목입력' && <EnterTitle onNext={() => setStep('가수검색')} />}
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
