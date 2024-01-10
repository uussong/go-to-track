import { HTMLAttributes } from 'react'
import { colors } from '@/styles/colors'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

type TypographyVariant = keyof typeof variants

interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  color?: string
}

type TagType = {
  [key in TypographyVariant]: React.ElementType
}

const tags: TagType = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  body: 'p',
  bodyStrong: 'strong',
  detail: 'span',
  detailStrong: 'strong',
}

export function Text({
  variant = 'body',
  color = colors.gray900,
  ...props
}: TextProps) {
  return (
    <TextTag
      as={tags[variant]}
      css={[{ color }, variants[variant]]}
      {...props}
    />
  )
}

const TextTag = styled.p``

const variants = {
  heading1: css`
    font-size: 24px;
    font-weight: 700;
  `,
  heading2: css`
    font-size: 20px;
    font-weight: 600;
  `,
  heading3: css`
    font-size: 18px;
    font-weight: 500;
  `,
  body: css`
    font-size: 16px;
    font-weight: 400;
  `,
  bodyStrong: css`
    font-size: 16px;
    font-weight: 600;
  `,
  detail: css`
    font-size: 14px;
    font-weight: 400;
  `,
  detailStrong: css`
    font-size: 14px;
    font-weight: 600;
  `,
}
