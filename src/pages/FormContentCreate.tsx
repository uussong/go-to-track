import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Link, useSearchParams } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import SearchArtist from '@/components/form/content/SearchArtist'
import SelectAlbum from '@/components/form/content/SelectAlbum'
import ConfirmTrack from '@/components/form/content/ConfirmTrack'
import { formTitleState } from '@/stores/form'
import useNavbar from '@/hooks/useNavbar'
import { useSaveFormData } from '@/hooks/useSaveFormData'
import ErrorPage from '@/components/form/content/ErrorPage'
import withErrorBoundary from '@/components/shared/errorBoundary/withErrorBoundary'
import SignOut from '@/components/shared/SignOut'
import { Button } from '@/components/shared/button'
import { ReactComponent as BackIcon } from '@/assets/icons/back.svg'
import TitleInput from '@/components/form/content/TitleInput'

function FormContentCreatePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const artistId = searchParams.get('artist') ?? ''
  const albumId = searchParams.get('album') ?? ''

  const [step, setStep] = useState<'가수검색' | '앨범선택' | '트랙확인'>(() => {
    return artistId && albumId === ''
      ? '앨범선택'
      : artistId && albumId
        ? '트랙확인'
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
    updateNavbar({
      left: (
        <div css={navbarStyles}>
          <Link to={`/myforms`}>
            <Button variant={'secondary'} size={'icon'} icon={<BackIcon />} />
          </Link>
          <TitleInput />
        </div>
      ),
      right: <SignOut />,
    })
  }, [updateNavbar])

  const completeFormCreation = async () => {
    await mutate({ formData })
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
          onComplete={completeFormCreation}
        />
      )}
    </PageLayout>
  )
}

export default withErrorBoundary(FormContentCreatePage, {
  fallback: <ErrorPage />,
})

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 100%;
`
