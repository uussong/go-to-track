import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FormEnter from '@/components/form/FormEnter'
import FormInfo from '@/components/form/FormInfo'
import SelectTrack from '@/components/form/SelectTrack'
import FormEnd from '@/components/form/FormEnd'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'
import ShareLink from '@/components/form/share/ShareLink'
import useNavbar from '@/hooks/useNavbar'

export default function FormSharePage() {
  const [step, setStep] = useState<'시작' | '정보' | '투표' | '완료'>('시작')
  const { formId } = useParams()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({
      left: <Link to={`/myforms`}>My forms</Link>,
      right: <ShareLink />,
    })
  }, [updateNavbar])

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
