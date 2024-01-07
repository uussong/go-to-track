import { InputHTMLAttributes, useState } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({ ...props }: TextInputProps) {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const resetValue = () => {
    setValue('')
  }

  return (
    <div css={{ position: 'relative' }}>
      <input
        type="text"
        css={inputStyles}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {value && (
        <button css={buttonStyles} onClick={resetValue}>
          x
        </button>
      )}
    </div>
  )
}

const inputStyles = css`
  position: relative;
  width: 100%;
  border-bottom: 2px solid ${colors.gray100};
  padding: 7px 12px;
  color: ${colors.gray900};

  ::placeholder {
    color: ${colors.gray500};
  }

  &:focus {
    border-color: ${colors.coral500};
  }
`

const buttonStyles = css`
  position: absolute;
  right: 7px;
  top: 50%;
  transform: translateY(-50%);
`
