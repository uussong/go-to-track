import { useSetRecoilState } from 'recoil'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import { formDataState } from '@/stores/form'

export default function MyFormsPage() {
  const setFormTitle = useSetRecoilState(formDataState)

  return (
    <PageLayout>
      <Link
        to={`/form/create/title`}
        onClick={() => setFormTitle({ formTitle: '' })}
      >
        <Button>만들기</Button>
      </Link>
    </PageLayout>
  )
}
