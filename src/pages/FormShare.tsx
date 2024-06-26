import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import FormEnter from '@/components/form/vote/FormEnter'
import FormInfo from '@/components/form/vote/FormInfo'
import SelectTrack from '@/components/form/vote/SelectTrack'
import FormEnd from '@/components/form/vote/FormEnd'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'
import useNavbar from '@/hooks/useNavbar'
import ShareLink from '@/components/form/share/ShareLink'
import { Button } from '@/components/shared/button'
import { ReactComponent as BackIcon } from '@/assets/icons/back.svg'

export default function FormSharePage() {
  const [step, setStep] = useState<'시작' | '정보' | '투표' | '완료'>('시작')
  const [nickname, setNickname] = useState('')

  const { formId } = useParams()

  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({
      left: (
        <div css={navbarStyles}>
          <Link to={`/myforms`}>
            <Button variant={'secondary'} size={'icon'} icon={<BackIcon />} />
          </Link>
        </div>
      ),
      right: <ShareLink />,
    })
  }, [updateNavbar])

  return (
    <PageLayout>
      {step === '시작' && (
        <FormEnter
          formTitle={form.formTitle}
          onNext={(nickname) => {
            setStep('정보')
            nickname && setNickname(nickname)
          }}
        />
      )}
      {step === '정보' && (
        <FormInfo form={form} onNext={() => setStep('투표')} />
      )}
      {step === '투표' && (
        <SelectTrack
          albumId={form.albumId}
          onNext={() => setStep('완료')}
          nickname={nickname}
        />
      )}
      {step === '완료' && <FormEnd />}
    </PageLayout>
  )
}

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 100%;
`
