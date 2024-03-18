import { RefObject, Suspense } from 'react'
import { css } from '@emotion/react'
import { FormListData } from '@/models/form'
import { Text } from '../shared/text'
import FormItem from './FormItem'
import { Skeleton } from '../shared/skeleton'

interface AllFormListProps {
  formList: FormListData[]
  lastFormRef: RefObject<HTMLDivElement>
}

export default function AllFormList({
  formList,
  lastFormRef,
}: AllFormListProps) {
  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'} css={headingStyles}>
        지금 바로 최애곡을 뽑아보세요
      </Text>
      {formList.map((form) => (
        <Suspense
          key={form.id}
          fallback={<Skeleton height={160} borderRadius={4} margin={10} />}
        >
          <FormItem form={form} />
        </Suspense>
      ))}
      <div ref={lastFormRef}></div>
    </section>
  )
}

const sectionStyles = css`
  width: 100%;
  padding-top: 50px;
`

const headingStyles = css`
  margin-bottom: 16px;
`
