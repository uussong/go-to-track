import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { TrackData } from '@/models/track'
import { colors } from '@/styles/colors'
import { RankedTrackCount } from '@/models/vote'

interface VoteReulstTracksProps {
  selectedTracks: TrackData[]
  rankedTrackCount: RankedTrackCount[]
}

export default function VoteResultTracks({
  selectedTracks,
  rankedTrackCount,
}: VoteReulstTracksProps) {
  return (
    <ul css={selectedTrackWrapperStyles}>
      {selectedTracks.map((selectedTrack) => {
        const rankedTrackVoteCount = rankedTrackCount.find(
          (count) => count.trackNumber === selectedTrack.track_number,
        )

        const voteCount = rankedTrackVoteCount
          ? rankedTrackVoteCount.voteCount
          : 0
        const rank = rankedTrackVoteCount ? rankedTrackVoteCount.rank : 0

        return (
          <li css={selectedTrackStyles} key={selectedTrack.id}>
            <Text variant={'bodyStrong'}>{selectedTrack.name}</Text>
            <Text>
              {voteCount}표로{' '}
              <Text variant={'bodyStrong'} css={rankStyles}>
                {rank}
              </Text>
              위
            </Text>
          </li>
        )
      })}
    </ul>
  )
}

const selectedTrackWrapperStyles = css`
  padding: 10px 0;
`

const selectedTrackStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
`

const rankStyles = css`
  color: ${colors.coral500};
`
