import { useRecoilValue } from 'recoil'
import { formState } from '@/stores/form'
import { useGetTracks } from '@/hooks/useGetTracks'

export default function SelectTrack() {
  const formData = useRecoilValue(formState)
  const albumId = formData.albumId
  const { data } = useGetTracks(albumId)

  return (
    <>
      {data &&
        data.map((track: any) => (
          <div key={track.id}>
            <span>{track.track_number}</span>
            <span>{track.name}</span>
          </div>
        ))}
    </>
  )
}
