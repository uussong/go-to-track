import { Suspense } from 'react'
import { FormListData } from '@/models/form'
import FormItem from './FormItem'
import { Skeleton } from '../shared/skeleton'

interface AllFormListProps {
  formList: FormListData[]
}

export default function AllFormList({ formList }: AllFormListProps) {
  return (
    <>
      {formList.map((form) => (
        <Suspense
          key={form.id}
          fallback={<Skeleton height={180} borderRadius={4} margin={10} />}
        >
          <FormItem form={form} />
        </Suspense>
      ))}
    </>
  )
}
