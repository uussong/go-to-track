import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'
import FormEnter from '@/components/form/vote/FormEnter'
import FormInfo from '@/components/form/vote/FormInfo'
import SelectTrack from '@/components/form/vote/SelectTrack'
import FormEnd from '@/components/form/vote/FormEnd'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'
import { voteDataState } from '@/stores/form'
import { useSaveVoteData } from '@/hooks/useSaveVoteData'

export default function VotePage() {
  const [step, setStep] = useState<'시작' | '정보' | '투표' | '완료'>('시작')
  const [nickname, setNickname] = useState('')
  const voteData = useRecoilValue(voteDataState)

  const { formId } = useParams()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }
  const { mutate } = useSaveVoteData()

  const completeVote = () => {
    if (formId) {
      mutate({ formId, voteData })
    }
  }

  return (
    <PageLayout>
      {step === '시작' && (
        <FormEnter
          formTitle={form.formTitle}
          onNext={(nickname) => {
            setStep('정보')
            setNickname(nickname)
          }}
        />
      )}
      {step === '정보' && (
        <FormInfo form={form} onNext={() => setStep('투표')} />
      )}
      {step === '투표' && (
        <SelectTrack
          albumId={form.albumId}
          onNext={() => {
            setStep('완료')
            completeVote()
          }}
          nickname={nickname}
        />
      )}
      {step === '완료' && <FormEnd />}
    </PageLayout>
  )
}
