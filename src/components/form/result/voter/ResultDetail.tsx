import _ from 'lodash'
import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { VoteData } from '@/models/vote'
import { useGetRankedTrackVoteCounts } from '@/hooks/useGetRankedTrackVoteCounts'
import { colors } from '@/styles/colors'
import { a11yHidden } from '@/styles/mixins'
import ResultChart from './ResultChart'
import VoteResultTracks from './VoteResultTracks'

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
    <section css={sectionStyles}>
      <Text css={headingStyles} variant={'heading2'}>
        투표 결과
      </Text>
      <Text variant={'heading3'}>
        <span css={nicknameStyles}>{data.nickname}</span>의 {album.name} 최애곡
      </Text>
      <VoteResultTracks
        selectedTracks={selectedTracks}
        rankedTrackCount={rankedTrackCount}
      />
      <ResultChart
        rankedTracks={rankedTracks}
        rankedTrackCount={rankedTrackCount}
        voteCount={voteCount}
        selectedTrackNumbers={selectedTrackNumbers}
      />
    </section>
  )
}

const sectionStyles = css`
  padding-top: 50px;

  @media (max-width: 576px) {
    padding-top: 25px;
  }
`

const headingStyles = css`
  ${a11yHidden}
`

const nicknameStyles = css`
  color: ${colors.coral500};
`
