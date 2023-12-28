import { colors } from '@/styles/colors'
import { ButtonHTMLAttributes } from 'react'
import { css } from '@emotion/react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'medium' | 'large' | 'fill'
  disabled?: boolean
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[style, variants[variant], sizes[size]]}
      disabled={disabled}
      {...props}
    />
  )
}

const style = css`
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  &:disabled {
    color: ${colors.gray500};
  }
`

const variants = {
  primary: css`
    color: ${colors.white};
    background-color: ${colors.coral500};
    &:hover {
      background-color: ${colors.coral700};
    }
    &:disabled {
      background-color: ${colors.gray200};
    }
  `,
  secondary: css`
    color: ${colors.gray900};
    &:hover {
      background-color: ${colors.gray200};
    }
    &:disabled {
      background-color: transparent;
    }
  `,
}

const sizes = {
  medium: css`
    height: 44px;
    padding: 12px 16px;
  `,
  large: css`
    height: 50px;
    padding: 13px 20px;
  `,
  fill: css`
    display: block;
    width: 100%;
    height: 50px;
    padding: 13px 0;
  `,
}
