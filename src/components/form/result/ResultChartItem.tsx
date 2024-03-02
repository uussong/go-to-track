import { css } from '@emotion/react'
import { Text } from '@/components/shared/text'
import { TrackData } from '@/models/track'
import { colors } from '@/styles/colors'

interface ResultChartItemProps {
  track: TrackData
  trackVoteCount: number
  voteCount: number
  index: number
  selectedTrackNumbers?: number[]
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
  selectedTrackNumbers,
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
  const isTrackSelected = selectedTrackNumbers
    ? selectedTrackNumbers.includes(track.track_number)
    : false

  return (
    <li>
      <div css={listInfoStyles}>
        <Text css={trackNameStyles}>
          {track.name}
          <span css={trackNameWrapperStyles(isTrackSelected)}></span>
        </Text>

        <div>
          <Text css={voteCountStyles(isTrackSelected)} variant={'detailStrong'}>
            {trackVoteCount}
          </Text>
          <Text css={votePercentageStyles(isTrackSelected)} variant={'detail'}>
            {trackPercentage}%
          </Text>
        </div>
      </div>
      <div css={chartBarStyles(trackPercentage, color, isTrackSelected)}></div>
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
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 4px;
`

const trackNameWrapperStyles = (isTrackSelected: boolean) => css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12px;
  z-index: -1;
  background-color: ${isTrackSelected ? colors.coral300 : null};
  padding: 0 5px;
`

const voteCountStyles = (isTrackSelected: boolean) => css`
  margin-right: 4px;
  color: ${isTrackSelected ? colors.coral500 : colors.gray900};
`

const votePercentageStyles = (isTrackSelected: boolean) => css`
  color: ${isTrackSelected ? colors.coral500 : colors.gray900};
`

const chartBarStyles = (
  trackPercentage: number,
  color: string,
  isTrackSelected: boolean,
) => css`
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
    background-color: ${isTrackSelected ? colors.coral500 : color};
    border-radius: 2px;
  }
`
