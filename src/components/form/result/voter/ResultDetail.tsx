import _ from 'lodash'
import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { VoteData } from '@/models/vote'
import { useGetRankedTrackVoteCounts } from '@/hooks/useGetRankedTrackVoteCounts'
import ResultChartItem from '../ResultChartItem'

interface ResultDetailProps {
  data: VoteData
  album: SingleAlbumData
  voteCount: number
}

export default function ResultDetail({
  data,
  album,
  voteCount,
}: ResultDetailProps) {
  const { formId } = useParams()
  const { data: rankedTrackCount } = useGetRankedTrackVoteCounts(formId!)

  const tracks = _.cloneDeep(album.tracks.items)

  const rankedTracks = tracks.sort((a, b) => {
    const trackARank =
      rankedTrackCount.find((count) => count.trackNumber === a.track_number)
        ?.rank || Infinity
    const trackBRank =
      rankedTrackCount.find((count) => count.trackNumber === b.track_number)
        ?.rank || Infinity
    return trackARank - trackBRank
  })

  const selectedTrackNumbers = data.vote.selectedTrack
  const selectedTracks = selectedTrackNumbers.map((trackNumber) => {
    const selectedTrack = album.tracks.items[trackNumber - 1]
    return selectedTrack
  })

  return (
    <>
      <Text>
        {data.nickname}의 {album.name} 최애곡
      </Text>
      {selectedTracks.map((selectedTrack) => {
        const rankedTrackVoteCount = rankedTrackCount.find(
          (count) => count.trackNumber === selectedTrack.track_number,
        )

        const voteCount = rankedTrackVoteCount
          ? rankedTrackVoteCount.voteCount
          : 0
        const rank = rankedTrackVoteCount ? rankedTrackVoteCount.rank : 0

        return (
          <div css={selectedTrackInfoStyles} key={selectedTrack.id}>
            <Text>
              <Text variant={'bodyStrong'}>{selectedTrack.name} </Text>
              현재 {rank}위<Text variant={'detail'}>({voteCount}표)</Text>
            </Text>
          </div>
        )
      })}

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
    </>
  )
}

const selectedTrackInfoStyles = css`
  padding: 4px 0;
`
