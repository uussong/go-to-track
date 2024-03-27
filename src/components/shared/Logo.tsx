import { Link } from 'react-router-dom'
import { Button } from './button'
import { css } from '@emotion/react'
import { colors } from '@/styles/colors'
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'

export default function Logo() {
  return (
    <Link to={`/`} aria-label={'홈으로'}>
      <Button
        variant={'secondary'}
        size={'icon'}
        icon={<LogoIcon css={svgStyles} />}
      />
    </Link>
  )
}

const svgStyles = css`
  &:hover {
    path {
      background-color: ${colors.gray500};
      fill: ${colors.gray700};
    }
  }
`
