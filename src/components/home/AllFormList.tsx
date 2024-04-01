import { Suspense } from 'react'
import { FormListData } from '@/models/form'
import FormItem from './FormItem'
import { Skeleton } from '../shared/skeleton'

interface AllFormListProps {
  formList: FormListData[]
  isFetched: boolean
}

export default function AllFormList({ formList, isFetched }: AllFormListProps) {
  return (
    <>
      {formList.map((form) => (
        <Suspense
          key={form.id}
          fallback={
            isFetched && <Skeleton height={180} borderRadius={4} margin={10} />
          }
        >
          <FormItem form={form} />
        </Suspense>
      ))}
    </>
  )
}
