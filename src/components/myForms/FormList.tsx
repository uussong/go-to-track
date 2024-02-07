import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { FormListData } from '@/models/form'
import { Text } from '../shared/text'
import { colors } from '@/styles/colors'
import { Button } from '../shared/button'

interface FormListProps {
  data: FormListData[]
}

export default function FormList({ data }: FormListProps) {
  return (
    <section css={sectionStyles}>
      {data.map(({ id, data: form }) => (
        <article css={articleStyles} key={id}>
          <Link to={`/form/${id}`} css={linkStyles}>
            <Text variant={'bodyStrong'}>{form.formTitle}</Text>
          </Link>
          <Link to={`/form/share/${id}`}>
            <Button>공유</Button>
          </Link>
        </article>
      ))}
    </section>
  )
}

const sectionStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10px;
  width: 100%;
`

const articleStyles = css`
  width: 165px;
  height: 165px;
  border: 2px solid ${colors.gray100};
  border-radius: 10px;
`

const linkStyles = css`
  display: inline-block;
  width: 100%;
  /* height: 100%; */
  padding: 16px;
`
