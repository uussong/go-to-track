import { useEffect } from 'react'
import PageLayout from '@/components/shared/PageLayout'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { useGetAllFormData } from '@/hooks/useGetAllFormData'
import AllFormList from '@/components/home/AllFormList'
import Introduction from '@/components/home/Introduction'
import { useUser } from '@/hooks/useUser'
import Navbar from '@/components/home/Navbar'

export default function HomePage() {
  const { updateNavbar } = useNavbar()
  const user = useUser()
  const { data: formList } = useGetAllFormData()

  useEffect(() => {
    updateNavbar({
      left: <Navbar />,
      right: user && <SignOut />,
    })
  }, [updateNavbar, user])

  return (
    <PageLayout>
      <Introduction />
      <AllFormList formList={formList} />
    </PageLayout>
  )
}
