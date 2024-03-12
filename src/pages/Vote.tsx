import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FormEnter from '@/components/form/vote/FormEnter'
import FormInfo from '@/components/form/vote/FormInfo'
import SelectTrack from '@/components/form/vote/SelectTrack'
import FormEnd from '@/components/form/vote/FormEnd'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'
import { useSaveVoteData } from '@/hooks/useSaveVoteData'
import { VoteData } from '@/models/vote'
import useNavbar from '@/hooks/useNavbar'
import Navbar from '@/components/form/vote/Navbar'

export default function VotePage() {
  const [step, setStep] = useState<'시작' | '정보' | '투표' | '완료'>('시작')
  const [voteData, setVoteData] = useState<VoteData>({
    nickname: '',
    vote: { albumId: '', selectedTrack: [] },
  })

  const { formId } = useParams()
  const navigate = useNavigate()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }

  const { mutate } = useSaveVoteData()

  const { updateNavbar } = useNavbar()

  const completeVote = () => {
    if (formId) {
      mutate({ formId, voteData })
    }
  }

  useEffect(() => {
    if (!formId) {
      navigate(-1)
    }
  }, [formId, navigate])

  useEffect(() => {
    updateNavbar({
      left: <Navbar />,
      right: null,
    })
  }, [updateNavbar])

  return (
    <PageLayout>
      {step === '시작' && (
        <FormEnter
          formTitle={form.formTitle}
          onNext={(nickname) => {
            setStep('정보')
            setVoteData((prevData) => ({ ...prevData, nickname }))
          }}
        />
      )}
      {step === '정보' && (
        <FormInfo
          form={form}
          onNext={() => {
            setStep('투표')
            setVoteData((prevData) => ({
              ...prevData,
              vote: { ...prevData.vote, albumId: form.albumId },
            }))
          }}
        />
      )}
      {step === '투표' && (
        <SelectTrack
          albumId={form.albumId}
          onNext={() => {
            setStep('완료')
            completeVote()
          }}
          onClick={(selectedTrack: number[]) =>
            setVoteData((prevData) => ({
              ...prevData,
              vote: { ...prevData.vote, selectedTrack },
            }))
          }
          nickname={voteData.nickname}
        />
      )}
      {step === '완료' && <FormEnd />}
    </PageLayout>
  )
}
