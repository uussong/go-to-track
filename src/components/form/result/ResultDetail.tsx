import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { useParams } from 'react-router-dom'
import { useGetTrackCounts } from '@/hooks/useGetTrackCounts'

interface ResultDetailProps {
  album: SingleAlbumData
  voteCount: number
}

export default function ResultDetail({ album, voteCount }: ResultDetailProps) {
  const { formId } = useParams()
  const { data: trackCounts } = useGetTrackCounts(formId!)

  const tracks = album.tracks.items

  return (
    <section>
      <Text variant={'heading2'}>{album.name}</Text>
      <ul>
        {tracks.map((track) => {
          const trackVoteCount = trackCounts[track.track_number] || 0
          let trackPercentage = (trackVoteCount / voteCount) * 100
          if (Number.isInteger(trackPercentage)) {
            trackPercentage = Math.round(trackPercentage)
          } else {
            trackPercentage = parseFloat(trackPercentage.toFixed(1))
          }
          return (
            <li key={track.id}>
              <Text>{track.name}</Text>
              <Text variant={'detailStrong'}>{trackVoteCount}</Text>
              <Text variant={'detail'}>{trackPercentage}%</Text>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
