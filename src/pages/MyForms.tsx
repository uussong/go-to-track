import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import FormList from '@/components/myForms/FormList'
import { useGetFormList } from '@/hooks/useGetFormList'

export default function MyFormsPage() {
  const { data } = useGetFormList()

  return (
    <PageLayout>
      <Link to={`/form`}>만들기</Link>
      <FormList data={data} />
    </PageLayout>
  )
}
