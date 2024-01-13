import { ChangeEvent, InputHTMLAttributes, useId, useRef } from 'react'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'
import { a11yHidden } from '@/styles/mixins'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function TextInput({
  label,
  value,
  onChange,
  ...props
}: TextInputProps) {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  const resetValue = () => {
    onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>)
    inputRef.current?.focus()
  }

  return (
    <div css={{ position: 'relative' }}>
      <label htmlFor={inputId} css={labelStyles}>
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        css={inputStyles}
        value={value}
        onChange={onChange}
        ref={inputRef}
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

const labelStyles = css`
  ${a11yHidden}
`

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
