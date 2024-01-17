import { useState } from 'react'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/EnterTitle'
import SearchArtist from '@/components/form/SearchArtist'
import SelectAlbum from '@/components/form/SelectAlbum'
import SelectTrack from '@/components/form/SelectTrack'
import { FormData } from '@/models/form'

export default function FormPage() {
  const [step, setStep] = useState<
    '제목입력' | '가수검색' | '앨범선택' | '트랙선택'
  >('제목입력')
  const [formData, setFormData] = useState<FormData>({
    formTitle: '',
    artistId: '',
    albumId: '',
  })

  return (
    <PageLayout>
      {step === '제목입력' && (
        <EnterTitle
          onNext={(formTitle) => {
            setFormData((prevData) => ({ ...prevData, formTitle }))
            setStep('가수검색')
          }}
        />
      )}
      {step === '가수검색' && (
        <SearchArtist
          onNext={(artistId) => {
            setFormData((prevData) => ({ ...prevData, artistId }))
            setStep('앨범선택')
          }}
        />
      )}
      {step === '앨범선택' && (
        <SelectAlbum
          artistId={formData.artistId}
          onPrevious={() => setStep('가수검색')}
          onNext={(albumId) => {
            setFormData((prevData) => ({ ...prevData, albumId }))
            setStep('트랙선택')
          }}
        />
      )}
      {step === '트랙선택' && (
        <SelectTrack
          formData={formData}
          onPrevious={() => setStep('앨범선택')}
        />
      )}
    </PageLayout>
  )
}
