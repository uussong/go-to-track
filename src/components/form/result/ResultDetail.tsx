import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { useParams } from 'react-router-dom'
import { useGetTrackCounts } from '@/hooks/useGetTrackCounts'

export default function ResultDetail({ album }: { album: SingleAlbumData }) {
  const { formId } = useParams()
  const { data: trackCounts } = useGetTrackCounts(formId!)

  const tracks = album.tracks.items

  return (
    <section>
      <Text variant={'heading2'}>{album.name}</Text>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <Text>{track.name}</Text>
            <Text variant={'detailStrong'}>
              {trackCounts[track.track_number]
                ? trackCounts[track.track_number]
                : 0}
            </Text>
          </li>
        ))}
      </ul>
    </section>
  )
}
