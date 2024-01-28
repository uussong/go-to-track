import { FormData } from '@/models/form'

export default function formDetail({ form }: { form: FormData }) {
  return <div>{form.formTitle}</div>
}
