import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { useGetAllFormData } from '@/hooks/useGetAllFormData'
import AllFormList from '@/components/home/AllFormList'
import Introduction from '@/components/home/Introduction'
import { Text } from '@/components/shared/text'
import { useUser } from '@/hooks/useUser'

export default function HomePage() {
  const { updateNavbar } = useNavbar()
  const user = useUser()
  const { data: formList } = useGetAllFormData()

  useEffect(() => {
    updateNavbar({
      left: (
        <Link to={`/`}>
          <Text variant={'heading1'}>go-to-track</Text>
        </Link>
      ),
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
