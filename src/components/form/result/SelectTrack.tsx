import { useState } from 'react'
import { css } from '@emotion/react'
import { Checkbox } from '@/components/shared/checkbox'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { TrackData } from '@/models/track'
import { Button } from '@/components/shared/button'

interface SelectTrackProps {
  albumId: string
  onNext: () => void
}

export default function SelectTrack({ albumId, onNext }: SelectTrackProps) {
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

      <Button onClick={onNext}>제출하기</Button>
    </section>
  )
}

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`

const ulStyles = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
