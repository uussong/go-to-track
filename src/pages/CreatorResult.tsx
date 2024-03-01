import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'
import useNavbar from '@/hooks/useNavbar'
import Navbar from '@/components/form/result/Navbar'
import SignOut from '@/components/shared/SignOut'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import ResultDetail from '@/components/form/result/creator/ResultDetail'
import { useGetVoteCount } from '@/hooks/useGetVoteCount'
import { Text } from '@/components/shared/text'

export default function CreatorResultPage() {
  const { formId } = useParams()
  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }
  const { data: album } = useGetAlbumInfo(form.albumId)
  const { data: voteCount } = useGetVoteCount(formId!)

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({
      left: <Navbar formTitle={form.formTitle} />,
      right: <SignOut />,
    })
  }, [updateNavbar, form.formTitle])

  return (
    <PageLayout>
      <Text>총 {voteCount}명이 투표한 결과</Text>
      <ResultDetail album={album} voteCount={voteCount} />
    </PageLayout>
  )
}
