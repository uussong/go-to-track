import { useParams } from 'react-router-dom'
import { User } from 'firebase/auth'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { useUser } from '@/hooks/useUser'
import FormDetail from '@/components/form/FormDetail'
import { FormData } from '@/models/form'

export default function FormPage() {
  const user = useUser()
  const { formId } = useParams()

  const { data: form } = useGetFormData(user as User, formId ?? '') as {
    data: FormData
  }

  return (
    <PageLayout>
      <FormDetail form={form} />
    </PageLayout>
  )
}
