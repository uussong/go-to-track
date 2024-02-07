import FormEnter from '@/components/form/result/FormEnter'
import FormInfo from '@/components/form/result/FormInfo'
import SelectTrack from '@/components/form/result/SelectTrack'
import PageLayout from '@/components/shared/PageLayout'
import { useState } from 'react'

export default function SharePage() {
  const [step, setStep] = useState<'시작' | '정보' | '투표'>('시작')
  return (
    <PageLayout>
      {step === '시작' && <FormEnter onNext={() => setStep('정보')} />}
      {step === '정보' && <FormInfo onNext={() => setStep('투표')} />}
      {step === '투표' && <SelectTrack />}
    </PageLayout>
  )
}
