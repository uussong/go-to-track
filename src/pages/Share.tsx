import { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormEnter from '@/components/form/vote/FormEnter'
import FormInfo from '@/components/form/vote/FormInfo'
import SelectTrack from '@/components/form/vote/SelectTrack'
import FormEnd from '@/components/form/vote/FormEnd'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'

export default function SharePage() {
  const [step, setStep] = useState<'시작' | '정보' | '투표' | '완료'>('시작')
  const { formId } = useParams()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }

  return (
    <PageLayout>
      {step === '시작' && (
        <FormEnter formTitle={form.formTitle} onNext={() => setStep('정보')} />
      )}
      {step === '정보' && (
        <FormInfo form={form} onNext={() => setStep('투표')} />
      )}
      {step === '투표' && (
        <SelectTrack albumId={form.albumId} onNext={() => setStep('완료')} />
      )}
      {step === '완료' && <FormEnd />}
    </PageLayout>
  )
}
