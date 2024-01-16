import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'

export default function MyFormsPage() {
  return (
    <PageLayout>
      <Button>
        <Link to={`/form`}>만들기</Link>
      </Button>
    </PageLayout>
  )
}
