import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'

export default function Navbar() {
  return (
    <Link to={`/`}>
      <Text variant={'heading1'}>
        <img
          css={imageStyles}
          src={'/images/logo.png'}
          alt="go-to-track 로고"
        />
      </Text>
    </Link>
  )
}

const imageStyles = css`
  height: 44px;
`
