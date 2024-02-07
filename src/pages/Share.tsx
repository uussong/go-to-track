import { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormEnter from '@/components/form/result/FormEnter'
import FormInfo from '@/components/form/result/FormInfo'
import SelectTrack from '@/components/form/result/SelectTrack'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormData } from '@/models/form'

export default function SharePage() {
  const [step, setStep] = useState<'시작' | '정보' | '투표'>('시작')
  const { formId } = useParams()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormData
  }

  return (
    <PageLayout>
      {step === '시작' && (
        <FormEnter formTitle={form.formTitle} onNext={() => setStep('정보')} />
      )}
      {step === '정보' && (
        <FormInfo form={form} onNext={() => setStep('투표')} />
      )}
      {step === '투표' && <SelectTrack albumId={form.albumId} />}
    </PageLayout>
  )
}
