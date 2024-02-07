import { useState } from 'react'
import { Checkbox } from '@/components/shared/checkbox'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { TrackData } from '@/models/track'

interface SelectTrackProps {
  albumId: string
}

export default function SelectTrack({ albumId }: SelectTrackProps) {
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
    <ul>
      {tracks.map((track: TrackData, index: number) => (
        <Checkbox
          index={track.track_number}
          label={track.name}
          checked={isChecked[index]}
          onClick={handleCheck}
        />
      ))}
    </ul>
  )
}
