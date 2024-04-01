import { useState } from 'react'
import { css } from '@emotion/react'
import { Checkbox } from '@/components/shared/checkbox'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { TrackData } from '@/models/track'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'

interface SelectTrackProps {
  albumId: string
  onNext: () => void
  onClick?: (selectedTrack: number[]) => void
  nickname: string
}

export default function SelectTrack({
  albumId,
  onNext,
  onClick,
  nickname,
}: SelectTrackProps) {
  const { data: album } = useGetAlbumInfo(albumId)
  const tracks = album.tracks.items

  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([])

  const handleCheck = (index: number) => {
    const updatedIndexes = checkedIndexes.includes(index)
      ? checkedIndexes.filter((i) => i !== index)
      : [index]
    setCheckedIndexes(updatedIndexes)
    onClick?.(updatedIndexes)
  }

  const handleSubmit = () => {
    onNext()
  }

  return (
    <section css={sectionStyles}>
      <div>
        <div css={textGroupStyles}>
          <Text variant={'heading2'}>
            {nickname}님의 <Text variant={'bodyStrong'}>{album.name} </Text>
            최애곡은?
          </Text>
        </div>
        <ul css={ulStyles}>
          {tracks.map((track: TrackData, index: number) => (
            <Checkbox
              key={track.id}
              index={track.track_number}
              label={track.name}
              checked={checkedIndexes.includes(index + 1)}
              onClick={handleCheck}
            />
          ))}
        </ul>
      </div>
      <Button onClick={handleSubmit} disabled={checkedIndexes.length === 0}>
        제출하기
      </Button>
    </section>
  )
}

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  flex-grow: 1;
  padding-top: 50px;

  @media (max-width: 576px) {
    padding-top: 25px;
  }
`

const textGroupStyles = css`
  margin-bottom: 16px;
`

const ulStyles = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
