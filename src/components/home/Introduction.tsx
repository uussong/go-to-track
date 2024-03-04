import { Link } from 'react-router-dom'
import { useUser } from '@/hooks/useUser'
import { Button } from '@/components/shared/button'
import { Text } from '../shared/text'
import { css } from '@emotion/react'

export default function Introduction() {
  const user = useUser()

  return (
    <section css={sectionStyles}>
      <Text variant={'heading1'}>최애곡 투표하기</Text>
      <Text css={textStyles}>
        좋아하는 가수의 앨범을 선택해 최애곡 투표를 만들어보세요! 투표하며 함께
        좋아하는 곡을 공유해봐요.
      </Text>
      <Link to={user ? `myforms` : `signin`}>
        <Button css={buttonStyles}>지금 만들러 가기</Button>
      </Link>
    </section>
  )
}

const sectionStyles = css`
  padding-top: 50px;
`

const textStyles = css`
  margin-top: 16px;
`

const buttonStyles = css`
  margin-top: 32px;
`
