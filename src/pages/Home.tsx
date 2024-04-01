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
import { useUser } from '@/hooks/useUser'
import { ReactComponent as LoadingIcon } from '@/assets/icons/loading.svg'
import { flexColumnCenter } from '@/styles/mixins'
import { Text } from '@/components/shared/text'

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
          <Text variant={'heading1'}>
            <img
              css={imageStyles}
              src={'/images/logo.png'}
              alt="go-to-track 로고"
            />
          </Text>
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
      <section css={sectionStyles}>
        <Text variant={'heading2'} css={headingStyles}>
          지금 바로 최애곡을 뽑아보세요
        </Text>
        {formList && (
          <InfiniteScroll
            dataLength={formList?.length}
            next={loadMore}
            hasMore={hasNextPage}
            loader={
              <div css={loadingWrapperStyles}>
                <LoadingIcon />
              </div>
            }
          >
            <AllFormList formList={formList} isFetched={!isFetchingNextPage} />
          </InfiniteScroll>
        )}
      </section>
    </PageLayout>
  )
}

const sectionStyles = css`
  padding-top: 50px;
`

const headingStyles = css`
  margin-bottom: 16px;
`

const loadingWrapperStyles = css`
  ${flexColumnCenter}
  padding: 24px 0;
`

const imageStyles = css`
  height: 44px;
`
