import { Link } from 'react-router-dom'
import { FormData } from '@/models/form'
import { Text } from '../shared/text'

interface FormListProps {
  data: { id: string; data: FormData }[]
}

export default function FormList({ data }: FormListProps) {
  return (
    <section>
      {data.map(({ id, data: form }) => (
        <article key={id}>
          <Link to={`/form/${id}`}>
            <Text variant={'bodyStrong'}>{form.formTitle}</Text>
          </Link>
        </article>
      ))}
    </section>
  )
}
