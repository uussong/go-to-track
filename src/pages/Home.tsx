import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { useGetAllFormData } from '@/hooks/useGetAllFormData'
import AllFormList from '@/components/home/AllFormList'
import Introduction from '@/components/home/Introduction'
import { useUser } from '@/hooks/useUser'
import { Text } from '@/components/shared/text'

export default function HomePage() {
  const { updateNavbar } = useNavbar()
  const user = useUser()
  const { data: formList } = useGetAllFormData()

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

  return (
    <PageLayout>
      <Introduction />
      <AllFormList formList={formList} />
    </PageLayout>
  )
}

const imageStyles = css`
  height: 44px;
`
