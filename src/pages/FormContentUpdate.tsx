import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import ConfirmTrack from '@/components/form/content/ConfirmTrack'
import SearchArtist from '@/components/form/content/SearchArtist'
import SelectAlbum from '@/components/form/content/SelectAlbum'
import PageLayout from '@/components/shared/PageLayout'
import { useUpdateFormData } from '@/hooks/useUpdateFormData'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromServer } from '@/models/form'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import BackWithTitleNavbar from '@/components/form/BackWithTitleNavbar'

export default function FormContentUpdatePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { formId } = useParams()
  const navigate = useNavigate()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromServer
  }

  const [step, setStep] = useState<'가수검색' | '앨범선택' | '트랙확인'>(
    searchParams.get('artist') ? '앨범선택' : '가수검색',
  )

  const artistId = searchParams.get('artist') ?? ''
  const albumId = searchParams.get('album') ?? ''

  const { updateNavbar } = useNavbar()
  const { mutate } = useUpdateFormData()

  const updatedFormData = {
    ...form,
    artistId,
    albumId,
  }

  useEffect(() => {
    updateNavbar({
      left: (
        <BackWithTitleNavbar
          formTitle={form.formTitle}
          formId={formId as string}
        />
      ),
      right: <SignOut />,
    })
  }, [updateNavbar, formId, form.formTitle])

  const updateFormData = () => {
    mutate({ updatedFormData })
    navigate(`/myforms`)
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
          onComplete={updateFormData}
        />
      )}
    </PageLayout>
  )
}
