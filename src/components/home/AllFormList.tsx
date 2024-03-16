import { Suspense } from 'react'
import { css } from '@emotion/react'
import { FormListData } from '@/models/form'
import { Text } from '../shared/text'
import FormItem from './FormItem'
import { Skeleton } from '../shared/skeleton'

interface AllFormListProps {
  formList: FormListData[]
}

export default function AllFormList({ formList }: AllFormListProps) {
  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'}>지금 바로 최애곡을 뽑아보세요</Text>
      {formList.map((form) => (
        <Suspense fallback={<Skeleton height={162} margin={10} />}>
          <FormItem key={form.id} form={form} />
        </Suspense>
      ))}
    </section>
  )
}

const sectionStyles = css`
  width: 100%;
  padding-top: 50px;
`
