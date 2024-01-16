import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { formDataState, formIdState } from '@/stores/form'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'

export default function MyFormsPage() {
  const setFormId = useSetRecoilState(formIdState)
  const setFormTitle = useSetRecoilState(formDataState)

  const reserFormData = () => {
    setFormId({ artistId: '', albumId: '' })
    setFormTitle({ formTitle: '' })
  }

  return (
    <PageLayout>
      <Link to={`/form`}>
        <Button onClick={reserFormData}>만들기</Button>
      </Link>
    </PageLayout>
  )
}
