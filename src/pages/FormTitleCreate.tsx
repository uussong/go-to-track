import { useSetRecoilState } from 'recoil'
import { formTitleState } from '@/stores/form'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/title/EnterTitle'

export default function FormTitleCreate() {
  const setFormTitle = useSetRecoilState(formTitleState)

  return (
    <PageLayout>
      <EnterTitle setFormTitle={(formTitle) => setFormTitle(formTitle)} />
    </PageLayout>
  )
}
