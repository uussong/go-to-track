import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import { Button } from '@/components/shared/button'
import useNavbar from '@/hooks/useNavbar'
import FormList from '@/components/myForms/FormList'
import { useGetUserFormList } from '@/hooks/useGetUserFormList'
import SignOut from '@/components/shared/SignOut'
import Navbar from '@/components/myForms/Navbar'

export default function MyFormsPage() {
  const { data } = useGetUserFormList()

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({
      left: <Navbar />,
      right: <SignOut />,
    })
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
