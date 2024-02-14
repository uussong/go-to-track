import { Text } from '@/components/shared/text'
import { flexCenter } from '@/styles/mixins'
import { css } from '@emotion/react'

export default function FormEnd() {
  return (
    <section css={sectionStyles}>
      <Text variant={'bodyStrong'}>투표가 완료되었어요!</Text>
    </section>
  )
}

const sectionStyles = css`
  ${flexCenter}
  flex: 1;
`
