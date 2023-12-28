import { HTMLAttributes } from 'react'
import { colors } from '@/styles/colors'
import { css } from '@emotion/react'

type TypographyVariant = keyof typeof variants

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TypographyVariant
  color?: string
}

export function Text({
  variant = 'heading1',
  color = colors.gray900,
  ...props
}: TextProps) {
  return <span css={[color, variants[variant]]} {...props} />
}

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
