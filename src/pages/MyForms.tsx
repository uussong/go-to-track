import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'

export default function MyFormsPage() {
  return (
    <PageLayout>
      <Link to={`/form/create/title`}>
        <Button>만들기</Button>
      </Link>
    </PageLayout>
  )
}
