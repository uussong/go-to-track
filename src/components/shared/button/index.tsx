import { ButtonHTMLAttributes, ReactNode } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  disabled?: boolean
  icon?: ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[style, variants[variant], sizes[size]]}
      disabled={disabled}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
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
    &:not(:disabled):hover {
      background-color: ${colors.coral300};
    }
    &:disabled {
      background-color: ${colors.gray200};
    }
  `,
  secondary: css`
    color: ${colors.gray900};
    background-color: ${colors.white};
    &:not(:disabled):hover {
      color: ${colors.gray700};
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
  icon: css`
    padding: 0 6px;
  `,
}
