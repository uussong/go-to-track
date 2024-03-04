import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { useGetAllFormData } from '@/hooks/useGetAllFormData'
import AllFormList from '@/components/home/AllFormList'
import Introduction from '@/components/home/Introduction'

export default function HomePage() {
  const { updateNavbar } = useNavbar()
  const { data: formList } = useGetAllFormData()

  useEffect(() => {
    updateNavbar({
      left: <Link to={`/`}>Home</Link>,
      right: <SignOut />,
    })
  }, [updateNavbar])

  return (
    <PageLayout>
      <Introduction />
      <AllFormList formList={formList} />
    </PageLayout>
  )
}
