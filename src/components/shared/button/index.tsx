import { colors } from '@/styles/colors'
import { ButtonHTMLAttributes } from 'react'
import { Text } from '../text'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'medium' | 'large' | 'fill'
  disabled?: boolean
  text: string
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  text,
  ...props
}: ButtonProps) => {
  let textColor
  if (disabled) {
    if (variant === 'primary') {
      textColor = colors.gray100
    }
    if (variant === 'secondary') {
      textColor = colors.gray200
    }
  }

  return (
    <button
      type="button"
      css={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        ...TYPE_VARIANTS[variant],
        ...SIZE_VARIANTS[size],
      }}
      disabled={disabled}
      {...props}
    >
      <Text variant="bodyStrong" color={textColor}>
        {text}
      </Text>
    </button>
  )
}

const TYPE_VARIANTS = {
  primary: {
    backgroundColor: colors.coral500,
    '&:hover': {
      backgroundColor: colors.coral700,
    },
    '&:disabled': {
      backgroundColor: colors.gray200,
    },
  },
  secondary: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.gray100,
    '&:hover': {
      backgroundColor: colors.gray200,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
    },
  },
}

const SIZE_VARIANTS = {
  medium: {
    height: '44px',
    padding: '12px 16px',
  },
  large: {
    height: '50px',
    padding: '13px 20px',
  },
  fill: {
    display: 'block',
    width: '100%',
    height: '50px',
    padding: '13px 0',
  },
}
