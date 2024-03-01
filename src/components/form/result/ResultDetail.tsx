import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { useGetTrackCounts } from '@/hooks/useGetTrackCounts'
import ResultChartItem from './ResultChartItem'

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
      <div css={titleStyles}>
        <Text variant={'bodyStrong'}>{album.name}</Text>
        <Text>최애곡은?</Text>
      </div>
      <ul>
        {tracks.map((track, index) => (
          <ResultChartItem
            key={track.id}
            track={track}
            trackVoteCount={trackCounts[track.track_number] || 0}
            voteCount={voteCount}
            index={index}
          />
        ))}
      </ul>
    </section>
  )
}

const titleStyles = css`
  padding: 6px 0;
`
