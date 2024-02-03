import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useSearchParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import SearchArtist from '@/components/form/content/SearchArtist'
import SelectAlbum from '@/components/form/content/SelectAlbum'
import SelectTrack from '@/components/form/content/SelectTrack'
import { formTitleState } from '@/stores/form'
import useNavbar from '@/hooks/useNavbar'
import Navbar from '@/components/form/content/Navbar'
import { useSaveFormData } from '@/hooks/useSaveFormData'
import ErrorBoundary from '@/components/shared/ErrorBoundary'
import ErrorPage from '@/components/form/content/ErrorPage'

export default function FormContentCreatePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const artistId = searchParams.get('artist') ?? ''
  const albumId = searchParams.get('album') ?? ''

  const [step, setStep] = useState<'가수검색' | '앨범선택' | '트랙선택'>(() => {
    return artistId && albumId === ''
      ? '앨범선택'
      : artistId && albumId
        ? '트랙선택'
        : '가수검색'
  })

  const formTitle = useRecoilValue(formTitleState)
  const { updateNavbar } = useNavbar()
  const { mutate } = useSaveFormData()

  const formData = {
    formTitle,
    artistId,
    albumId,
  }

  useEffect(() => {
    updateNavbar({ left: <Navbar />, title: null })
  }, [updateNavbar])

  const completeFormCreation = async () => {
    await mutate({ formData })
  }

  return (
    <PageLayout>
      <ErrorBoundary fallback={<ErrorPage />}>
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
            onPrevious={() => {
              setStep('앨범선택')
              searchParams.delete('album')
              setSearchParams(searchParams)
            }}
            onComplete={completeFormCreation}
          />
        )}
      </ErrorBoundary>
    </PageLayout>
  )
}
