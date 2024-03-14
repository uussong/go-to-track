import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { useGetRankedTrackVoteCounts } from '@/hooks/useGetRankedTrackVoteCounts'
import ResultChartItem from '../ResultChartItem'

interface ResultDetailProps {
  album: SingleAlbumData
  voteCount: number
}

export default function ResultDetail({ album, voteCount }: ResultDetailProps) {
  const { formId } = useParams()
  const { data: rankedTrackCounts } = useGetRankedTrackVoteCounts(formId!)
  const tracks = album.tracks.items

  return (
    <>
      <div css={titleStyles}>
        <Text variant={'bodyStrong'}>{album.name}</Text>
        <Text>최애곡은?</Text>
      </div>
      <ul>
        {tracks.map((track, index) => {
          const trackVoteCount =
            rankedTrackCounts.find(
              (count) => count.trackNumber === track.track_number,
            )?.voteCount || 0
          return (
            <ResultChartItem
              key={track.id}
              track={track}
              trackVoteCount={trackVoteCount}
              voteCount={voteCount}
              index={index}
            />
          )
        })}
      </ul>
    </>
  )
}

const titleStyles = css`
  padding: 6px 0;
`
