import { Button } from '@/components/shared/button'
import { Link, useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { flexColumnCenter } from '@/styles/mixins'

interface FormEndProps {
  userId?: string
}

export default function FormEnd({ userId }: FormEndProps) {
  const { formId } = useParams()

  return (
    <section css={sectionStyles}>
      <Text variant={'bodyStrong'}>투표가 완료되었어요!</Text>
      {userId ? (
        <Link to={`/${userId}/result/${formId}`}>
          <Button>결과 보기</Button>
        </Link>
      ) : (
        <Button>결과 보기</Button>
      )}
    </section>
  )
}

const sectionStyles = css`
  ${flexColumnCenter}
  flex: 1;
  gap: 24px;
`
