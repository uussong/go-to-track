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
    <section css={sectionStyles}>
      <Text>총 {voteCount}명이 투표한 결과</Text>

      <Text variant={'heading3'}>
        {album.name}{' '}
        <Text css={textStyles} variant={'body'}>
          최애곡은?
        </Text>
      </Text>

      <ul css={listStyles}>
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
    </section>
  )
}

const sectionStyles = css`
  padding-top: 50px;

  @media (max-width: 576px) {
    padding-top: 25px;
  }
`

const textStyles = css`
  display: inline-block;
`

const listStyles = css`
  padding-top: 15px;
`
