import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { useUser } from '@/hooks/useUser'
import { useGetFormList } from '@/hooks/useGetFormList'
import { User } from 'firebase/auth'

export default function MyFormsPage() {
  const user = useUser()
  const { data } = useGetFormList(user as User)

  return (
    <PageLayout>
      <Link to={`/form`}>만들기</Link>
      {data.map((form) => (
        <div>{form.formTitle}</div>
      ))}
    </PageLayout>
  )
}
