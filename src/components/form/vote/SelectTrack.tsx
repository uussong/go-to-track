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
  nickname?: string
}

export default function SelectTrack({
  albumId,
  onNext,
  nickname,
}: SelectTrackProps) {
  const { data: album } = useGetAlbumInfo(albumId)
  const tracks = album.tracks.items

  const [isChecked, setIsChecked] = useState<boolean[]>(
    Array(tracks.length).fill(false),
  )

  const handleCheck = (checkedIndex: number, checked: boolean) => {
    setIsChecked((prevData) =>
      prevData.map((value, idx) =>
        idx + 1 === checkedIndex ? checked : value,
      ),
    )
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
              index={track.track_number}
              label={track.name}
              checked={isChecked[index]}
              onClick={handleCheck}
            />
          ))}
        </ul>
      </div>
      <Button onClick={onNext}>제출하기</Button>
    </section>
  )
}

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  flex-grow: 1;
`

const textGroupStyles = css`
  margin-bottom: 16px;
`

const ulStyles = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
