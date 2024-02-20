import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'

export default function ResultDetail({ album }: { album: SingleAlbumData }) {
  const tracks = album.tracks.items
  return (
    <section>
      <Text variant={'heading2'}>{album.name}</Text>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <Text>{track.name}</Text>
          </li>
        ))}
      </ul>
    </section>
  )
}
