import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'

export default function Navbar() {
  return (
    <div css={navbarStyles}>
      <Link to={`/`} aria-label={'홈으로'}>
        <Text variant={'heading1'}>
          <Button variant={'secondary'} size={'icon'} icon={<LogoIcon />} />
        </Text>
      </Link>
      <div css={myformsWrapperStyles}>
        <Text css={myformsStyles} variant={'heading2'}>
          My forms
        </Text>
      </div>
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

const myformsWrapperStyles = css`
  height: 44px;
  padding: 12px 0;
`

const myformsStyles = css`
  font-size: 16px;
  line-height: 20px;
`
