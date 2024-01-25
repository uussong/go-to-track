import { Link } from 'react-router-dom'
import { User } from 'firebase/auth'
import PageLayout from '@/components/shared/PageLayout'
import FormList from '@/components/myForms/FormList'
import { useUser } from '@/hooks/useUser'
import { useGetFormList } from '@/hooks/useGetFormList'

export default function MyFormsPage() {
  const user = useUser()
  const { data } = useGetFormList(user as User)

  return (
    <PageLayout>
      <Link to={`/form`}>만들기</Link>
      {data && <FormList data={data} />}
    </PageLayout>
  )
}
