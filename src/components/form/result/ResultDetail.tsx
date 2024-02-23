import { useParams } from 'react-router-dom'
import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { useGetTrackCounts } from '@/hooks/useGetTrackCounts'
import { colors } from '@/styles/colors'

interface ResultDetailProps {
  album: SingleAlbumData
  voteCount: number
}

export default function ResultDetail({ album, voteCount }: ResultDetailProps) {
  const { formId } = useParams()
  const { data: trackCounts } = useGetTrackCounts(formId!)

  const tracks = album.tracks.items

  const getRandomColor = (() => {
    const colorOptions: (keyof typeof colors)[] = [
      'pink',
      'yellow',
      'blue',
      'green',
      'purple',
    ]
    let startingColorIndex = Math.floor(Math.random() * colorOptions.length)

    return (index: number) => {
      const colorIndex = (index + startingColorIndex) % colorOptions.length
      const selectedColor = colorOptions[colorIndex]
      return colors[selectedColor]
    }
  })()

  return (
    <section>
      <Text variant={'heading2'}>{album.name}</Text>
      <ul>
        {tracks.map((track, index) => {
          const trackVoteCount = trackCounts[track.track_number] || 0
          let trackPercentage = (trackVoteCount / voteCount) * 100
          if (Number.isInteger(trackPercentage)) {
            trackPercentage = Math.round(trackPercentage)
          } else {
            trackPercentage = parseFloat(trackPercentage.toFixed(1))
          }
          const color = getRandomColor(index)
          return (
            <li key={track.id}>
              <Text>{track.name}</Text>
              <Text variant={'detailStrong'}>{trackVoteCount}</Text>
              <Text variant={'detail'}>{trackPercentage}%</Text>
              <div css={chartBarStyles(trackPercentage, color)}></div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const chartBarStyles = (trackPercentage: number, color: string) => css`
  position: relative;
  width: 100%;
  height: 24px;
  background-color: ${colors.gray200};
  border-radius: 2px;

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    width: ${trackPercentage}%;
    background-color: ${color};
    border-radius: 2px;
  }
`
