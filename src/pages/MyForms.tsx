import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'

export default function MyFormsPage() {
  return (
    <PageLayout>
      <Link to={`/form`}>만들기</Link>
    </PageLayout>
  )
}
