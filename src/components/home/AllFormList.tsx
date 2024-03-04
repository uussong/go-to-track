import { FormListData } from '@/models/form'
import { Text } from '../shared/text'
import FormItem from './FormItem'

interface AllFormListProps {
  formList: FormListData[]
}

export default function AllFormList({ formList }: AllFormListProps) {
  return (
    <section>
      <Text variant={'heading2'}>지금 바로 최애곡을 뽑아보세요</Text>
      {formList.map((form) => (
        <FormItem key={form.id} form={form} />
      ))}
    </section>
  )
}
