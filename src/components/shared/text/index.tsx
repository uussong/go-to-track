import { HTMLAttributes } from 'react'
import { colors } from '@/styles/colors'

type TypographyVariant = keyof typeof TYPOGRAPHY_VARIANT

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TypographyVariant
  color?: string
}

export function Text({
  variant = 'heading1',
  color = colors.gray900,
  ...props
}: TextProps) {
  return <span css={{ color, ...TYPOGRAPHY_VARIANT[variant] }} {...props} />
}

const TYPOGRAPHY_VARIANT = {
  heading1: {
    fontSize: '24px',
    fontWeight: 700,
  },
  heading2: {
    fontSize: '20px',
    fontWeight: 600,
  },
  heading3: {
    fontSize: '18px',
    fontWeight: 500,
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
  },
  bodyStrong: {
    fontSize: '16px',
    fontWeight: 600,
  },
  detail: {
    fontSize: '14px',
    fontWeight: 400,
  },
  detailStrong: {
    fontSize: '14px',
    fontWeight: 600,
  },
}
