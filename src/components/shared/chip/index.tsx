import { colors } from '@/styles/colors'
import { css } from '@emotion/react'
import { HTMLAttributes } from 'react'

interface ChipProps extends HTMLAttributes<HTMLLIElement> {
  index: number
  label: string
  selected: boolean
}
export function Chip({ index, label, selected, onClick, ...props }: ChipProps) {
  return (
    <li
      css={[chipStyles, selected && selectedStyles]}
      onClick={onClick}
      {...props}
    >
      <span css={indexStyles}>{index}</span>
      <span css={labelStyles}>{label}</span>
    </li>
  )
}

const chipStyles = css`
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
const selectedStyles = css`
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
