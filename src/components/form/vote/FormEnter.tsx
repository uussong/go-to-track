import { css } from '@emotion/react'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { flexColumnCenter } from '@/styles/mixins'

interface FormEnterProps {
  formTitle: string
  onNext: () => void
}

export default function FormEnter({ formTitle, onNext }: FormEnterProps) {
  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'}>{formTitle}</Text>
      <Button onClick={onNext}>시작하기</Button>
    </section>
  )
}

const sectionStyles = css`
  ${flexColumnCenter}
  gap: 50px;
  flex-grow: 1;
`
