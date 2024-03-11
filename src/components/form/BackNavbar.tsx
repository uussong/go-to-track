import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { Button } from '@/components/shared/button'
import { ReactComponent as BackIcon } from '@/assets/icons/back.svg'

export default function BackNavbar() {
  return (
    <div css={navbarStyles}>
      <Link to={`/myforms`}>
        <Button variant={'secondary'} size={'icon'} icon={<BackIcon />} />
      </Link>
    </div>
  )
}

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 100%;
`
