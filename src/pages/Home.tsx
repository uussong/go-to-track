import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { usePaginatedFormData } from '@/hooks/usePaginatedFormData'
import AllFormList from '@/components/home/AllFormList'
import Introduction from '@/components/home/Introduction'
import { Text } from '@/components/shared/text'
import { useUser } from '@/hooks/useUser'
import { ReactComponent as LoadingIcon } from '@/assets/icons/loading.svg'

export default function HomePage() {
  const { updateNavbar } = useNavbar()
  const user = useUser()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePaginatedFormData()

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

  const loadMore = () => {
    if (hasNextPage === false || isFetchingNextPage) return
    fetchNextPage()
  }

  return (
    <PageLayout>
      <Introduction />
      {formList && (
        <InfiniteScroll
          dataLength={formList?.length}
          next={loadMore}
          hasMore={hasNextPage}
          loader={<LoadingIcon css={LoadingStyles} />}
        >
          <AllFormList formList={formList} />
        </InfiniteScroll>
      )}
    </PageLayout>
  )
}

const LoadingStyles = css`
  width: 100%;
  margin: 16px auto;
`
