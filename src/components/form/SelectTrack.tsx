import { useRecoilValue } from 'recoil'
import { formIdState } from '@/stores/form'
import { useGetTracks } from '@/hooks/useGetTracks'
import CompleteButton from './CompleteButton'

export default function SelectTrack() {
  const formId = useRecoilValue(formIdState)
  const albumId = formId.albumId
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
      <CompleteButton />
    </>
  )
}
