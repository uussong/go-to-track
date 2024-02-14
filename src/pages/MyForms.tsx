import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import useNavbar from '@/hooks/useNavbar'
import FormList from '@/components/myForms/FormList'
import { useGetFormList } from '@/hooks/useGetFormList'

export default function MyFormsPage() {
  const { data } = useGetFormList()

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({ left: <Link to={``}>Home</Link>, title: null })
  }, [updateNavbar])

  return (
    <PageLayout>
      <Link to={`/form/create/title`}>
        <Button>만들기</Button>
      </Link>
      <FormList data={data} />
    </PageLayout>
  )
}
