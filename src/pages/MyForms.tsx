import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import { formTitleState } from '@/stores/form'

export default function MyFormsPage() {
  const setFormTitle = useSetRecoilState(formTitleState)

  return (
    <PageLayout>
      <Link to={`/form/create/title`} onClick={() => setFormTitle('')}>
        <Button>만들기</Button>
      </Link>
    </PageLayout>
  )
}
