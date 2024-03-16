import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { usePaginatedFormData } from '@/hooks/usePaginatedFormData'
import AllFormList from '@/components/home/AllFormList'
import Introduction from '@/components/home/Introduction'
import { Text } from '@/components/shared/text'
import { useUser } from '@/hooks/useUser'
import { Button } from '@/components/shared/button'

export default function HomePage() {
  const { updateNavbar } = useNavbar()
  const user = useUser()
  const { data, fetchNextPage } = usePaginatedFormData()

  const formList = data?.pages.flatMap((forms) => forms.formList)

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
      {formList && <AllFormList formList={formList} />}
      <Button variant={'secondary'} onClick={() => fetchNextPage()}>
        불러오기
      </Button>
    </PageLayout>
  )
}
