import { FormListData } from '@/models/form'
import { Text } from '../shared/text'
import FormItem from './FormItem'
import { css } from '@emotion/react'

interface AllFormListProps {
  formList: FormListData[]
}

export default function AllFormList({ formList }: AllFormListProps) {
  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'}>지금 바로 최애곡을 뽑아보세요</Text>
      {formList.map((form) => (
        <FormItem key={form.id} form={form} />
      ))}
    </section>
  )
}

const sectionStyles = css`
  width: 100%;
  padding-top: 50px;
`
