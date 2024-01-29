import { ArtistData } from '@/models/artist'
import { FormData } from '@/models/form'
import { Text } from '../shared/text'

interface formDetailProps {
  form: FormData
  artist: ArtistData
}

export default function formDetail({ form, artist }: formDetailProps) {
  return (
    <section>
      <Text variant={'heading2'}>{form.formTitle}</Text>
      <article>
        <img src={artist.images[2].url} alt={artist.name} />
        <Text variant={'heading3'}>{artist.name}</Text>
      </article>
    </section>
  )
}
