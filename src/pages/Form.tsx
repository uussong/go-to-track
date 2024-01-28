import { useParams } from 'react-router-dom'
import { User } from 'firebase/auth'
import PageLayout from '@/components/shared/PageLayout'
import { Text } from '@/components/shared/text'
import { useGetFormData } from '@/hooks/useGetFormData'
import { useUser } from '@/hooks/useUser'

export default function Form() {
  const user = useUser()
  const { formId } = useParams()

  const { data } = useGetFormData(user as User, formId!)

  return (
    <PageLayout>
      <Text variant={'heading2'}>{data?.formTitle}</Text>
    </PageLayout>
  )
}
