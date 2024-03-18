import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '@/components/shared/PageLayout'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { usePaginatedFormData } from '@/hooks/usePaginatedFormData'
import AllFormList from '@/components/home/AllFormList'
import Introduction from '@/components/home/Introduction'
import { Text } from '@/components/shared/text'
import { useUser } from '@/hooks/useUser'

export default function HomePage() {
  const { updateNavbar } = useNavbar()
  const user = useUser()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePaginatedFormData()

  const formList = data?.pages.flatMap((forms) => forms.formList)

  const lastFormRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isFetchingNextPage) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    })

    const currentRef = lastFormRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasNextPage, fetchNextPage, lastFormRef, isFetchingNextPage])

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
      {formList && (
        <AllFormList formList={formList} lastFormRef={lastFormRef} />
      )}
    </PageLayout>
  )
}
