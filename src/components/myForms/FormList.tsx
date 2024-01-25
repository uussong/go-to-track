import { FormData } from '@/models/form'
import { Text } from '../shared/text'

export default function FormList({ data }: { data: FormData[] }) {
  return (
    <section>
      {data.map((form: FormData) => (
        <article key={form.timestamp.toString()}>
          <Text variant={'bodyStrong'}>{form.formTitle}</Text>
        </article>
      ))}
    </section>
  )
}
