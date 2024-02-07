import { colors } from '@/styles/colors'
import { a11yHidden } from '@/styles/mixins'
import { css } from '@emotion/react'
import { useId } from 'react'

interface CheckboxProps {
  index: number
  label: string
  checked: boolean
  onClick: (index: number, checked: boolean) => void
}

export function Checkbox({ index, label, checked, onClick }: CheckboxProps) {
  const checkboxId = useId()

  const handleClick = () => {
    onClick(index, !checked)
  }

  return (
    <li>
      <input css={inputStyles} id={checkboxId} type="checkbox" />
      <label
        css={[checkboxStyles, checked && checkedStyles]}
        htmlFor={checkboxId}
        onClick={handleClick}
      >
        <span css={indexStyles}>{index}</span>
        <span css={labelStyles}>{label}</span>
      </label>
    </li>
  )
}

const inputStyles = css`
  ${a11yHidden}
`

const checkboxStyles = css`
  display: inline-flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: inset 0 0 0 2px ${colors.gray100};
  min-width: 165px;
  max-width: 343px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 2px ${colors.coral500};

    & > span {
      border-color: ${colors.coral500};
    }
  }
`

const checkedStyles = css`
  color: ${colors.white};
  background-color: ${colors.coral500};
  box-shadow: none;

  &:hover > span,
  & > span {
    border-color: ${colors.white};
  }
`
const indexStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 44px;
`

const labelStyles = css`
  padding: 11px 17px;
  border-left: 2px solid ${colors.gray100};
  overflow: hidden;
  text-overflow: ellipsis;
`
