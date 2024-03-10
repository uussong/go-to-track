import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { Text } from '../shared/text'
import { Button } from '../shared/button'
import { colors } from '@/styles/colors'
import { FormDataFromServer } from '@/models/form'

interface MyFormListItemProps {
  id: string
  form: FormDataFromServer
}

export default function MyFormListItem({ id, form }: MyFormListItemProps) {
  return (
    <div css={articleStyles}>
      <Link css={linkStyles} to={`/form/${id}`}>
        <Text variant={'bodyStrong'}>{form.formTitle}</Text>
      </Link>
      <div css={buttonGroupStyles}>
        <Link to={`/form/result/${id}`}>
          <Button variant={'secondary'}>결과</Button>
        </Link>
        <Link to={`/form/share/${id}`}>
          <Button variant={'secondary'}>공유</Button>
        </Link>
      </div>
    </div>
  )
}

const articleStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 165px;
  height: 165px;
  border: 2px solid ${colors.gray100};
  border-radius: 10px;
  padding: 16px;
`

const linkStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
`

const buttonGroupStyles = css`
  display: flex;
  justify-content: space-between;
`
