import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { TrackData } from '@/models/track'
import { colors } from '@/styles/colors'

interface ResultChartItemProps {
  track: TrackData
  trackVoteCount: number
  voteCount: number
  index: number
}

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

export default function ResultChartItem({
  track,
  trackVoteCount,
  voteCount,
  index,
}: ResultChartItemProps) {
  let trackPercentage
  if (trackVoteCount === 0) {
    trackPercentage = 0
  } else {
    trackPercentage = (trackVoteCount / voteCount) * 100
  }
  if (Number.isInteger(trackPercentage)) {
    trackPercentage = Math.round(trackPercentage)
  } else {
    trackPercentage = parseFloat(trackPercentage.toFixed(1))
  }

  const color = getRandomColor(index)
  return (
    <li>
      <div css={listInfoStyles}>
        <Text css={trackNameStyles}>{track.name}</Text>
        <div>
          <Text css={voteCountStyles} variant={'detailStrong'}>
            {trackVoteCount}
          </Text>
          <Text variant={'detail'}>{trackPercentage}%</Text>
        </div>
      </div>
      <div css={chartBarStyles(trackPercentage, color)}></div>
    </li>
  )
}

const listInfoStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 10px;
  padding: 6px 0;
`

const trackNameStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
`

const voteCountStyles = css`
  margin-right: 4px;
`

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
