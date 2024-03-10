import { css } from '@emotion/react'
import { FormListData } from '@/models/form'
import MyFormListItem from './MyFormListItem'

interface MyFormListProps {
  data: FormListData[]
}

export default function MyFormList({ data }: MyFormListProps) {
  return (
    <ul css={listStyles}>
      {data.map(({ id, data: form }) => (
        <li key={id}>
          <MyFormListItem id={id} form={form} />
        </li>
      ))}
    </ul>
  )
}

const listStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 10px;
  width: 100%;
  padding-top: 25px;
`
