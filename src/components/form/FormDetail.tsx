import { ArtistData } from '@/models/artist'
import { FormData } from '@/models/form'
import { Text } from '../shared/text'
import { SingleAlbumData } from '@/models/album'

interface formDetailProps {
  form: FormData
  artist: ArtistData
  album: SingleAlbumData
}

export default function formDetail({ form, artist, album }: formDetailProps) {
  return (
    <section>
      <Text variant={'heading2'}>{form.formTitle}</Text>
      <article>
        <img src={artist.images[2].url} alt={artist.name} />
        <Text variant={'bodyStrong'}>{artist.name}</Text>
      </article>
      <article>
        <img src={album.images[2].url} alt={album.name} />
        <Text variant={'bodyStrong'}>{album.name}</Text>
      </article>
    </section>
  )
}
