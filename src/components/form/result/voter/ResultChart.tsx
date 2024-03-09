import ResultChartItem from '../ResultChartItem'
import { TrackData } from '@/models/track'
import { RankedTrackCount } from '@/models/vote'

interface ResultChartProps {
  rankedTracks: TrackData[]
  rankedTrackCount: RankedTrackCount[]
  voteCount: number
  selectedTrackNumbers: number[]
}

export default function ResultChart({
  rankedTracks,
  rankedTrackCount,
  voteCount,
  selectedTrackNumbers,
}: ResultChartProps) {
  return (
    <ul>
      {rankedTracks.map((track, index) => {
        const trackVoteCount =
          rankedTrackCount.find(
            (count) => count.trackNumber === track.track_number,
          )?.voteCount || 0
        return (
          <ResultChartItem
            key={track.id}
            track={track}
            trackVoteCount={trackVoteCount}
            voteCount={voteCount}
            index={index}
            selectedTrackNumbers={selectedTrackNumbers}
          />
        )
      })}
    </ul>
  )
}
