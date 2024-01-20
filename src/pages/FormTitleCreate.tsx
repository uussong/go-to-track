import { useSetRecoilState } from 'recoil'
import { formDataState } from '@/stores/form'
import PageLayout from '@/components/shared/PageLayout'
import EnterTitle from '@/components/form/title/EnterTitle'

export default function FormTitleCreate() {
  const setFormData = useSetRecoilState(formDataState)
  return (
    <PageLayout>
      <EnterTitle
        setFormData={(formTitle) =>
          setFormData((prevData) => ({ ...prevData, formTitle }))
        }
      />
    </PageLayout>
  )
}
