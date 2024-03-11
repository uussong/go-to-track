import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '../shared/text'
import { Button } from '@/components/shared/button'
import { ReactComponent as BackIcon } from '@/assets/icons/back.svg'

interface NavbarProps {
  formTitle: string
  formId: string
}

export default function BackWithTitleNavbar({
  formTitle,
  formId,
}: NavbarProps) {
  return (
    <div css={navbarStyles}>
      <Link to={`/myforms`}>
        <Button variant={'secondary'} size={'icon'} icon={<BackIcon />} />
      </Link>
      <Link to={`/form/${formId}`}>
        <Text css={formTitleStyles} variant={'heading2'}>
          <Button variant={'secondary'}>{formTitle}</Button>
        </Text>
      </Link>
    </div>
  )
}

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const formTitleStyles = css`
  font-size: 16px;
`
