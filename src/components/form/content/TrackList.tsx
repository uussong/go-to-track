import { TrackData } from '@/models/track'
import { colors } from '@/styles/colors'
import { css } from '@emotion/react'

interface TrackListProps {
  data: TrackData[]
}

export default function TrackList({ data }: TrackListProps) {
  return (
    <ul css={listStyles}>
      {data.map((track: TrackData) => (
        <li css={listItemStyles} key={track.id}>
          <span css={indexStyles}>{track.track_number}</span>
          <span css={labelStyles}>{track.name}</span>
        </li>
      ))}
    </ul>
  )
}

const listStyles = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
`

const listItemStyles = css`
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: inset 0 0 0 2px ${colors.gray100};
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 2px ${colors.coral500};

    & > span {
      border-color: ${colors.coral500};
    }
  }
`

const indexStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 44px;
`

const labelStyles = css`
  padding: 11px 17px;
  border-left: 2px solid ${colors.gray100};
  overflow: hidden;
  text-overflow: ellipsis;
`
