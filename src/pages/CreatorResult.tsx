import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import PageLayout from '@/components/shared/PageLayout'
import { useGetFormData } from '@/hooks/useGetFormData'
import { FormDataFromUser } from '@/models/form'
import useNavbar from '@/hooks/useNavbar'
import SignOut from '@/components/shared/SignOut'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import ResultDetail from '@/components/form/result/creator/ResultDetail'
import { useGetVoteCount } from '@/hooks/useGetVoteCount'
import { Text } from '@/components/shared/text'
import { Button } from '@/components/shared/button'
import { ReactComponent as BackIcon } from '@/assets/icons/back.svg'

export default function CreatorResultPage() {
  const { formId } = useParams()
  const { data: form } = useGetFormData(formId ?? '') as {
    data: FormDataFromUser
  }
  const { data: album } = useGetAlbumInfo(form.albumId)
  const { data: voteCount } = useGetVoteCount(formId!)

  const { updateNavbar } = useNavbar()

  useEffect(() => {
    updateNavbar({
      left: (
        <div css={navbarStyles}>
          <Link to={`/myforms`}>
            <Button variant={'secondary'} size={'icon'} icon={<BackIcon />} />
          </Link>
          <Link to={`/form/${formId}`}>
            <Text css={formTitleStyles} variant={'heading2'}>
              <Button variant={'secondary'}>{form.formTitle}</Button>
            </Text>
          </Link>
        </div>
      ),
      right: <SignOut />,
    })
  }, [updateNavbar, form.formTitle, formId])

  return (
    <PageLayout>
      <Text>총 {voteCount}명이 투표한 결과</Text>
      <ResultDetail album={album} voteCount={voteCount} />
    </PageLayout>
  )
}

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const formTitleStyles = css`
  font-size: 16px;
`
