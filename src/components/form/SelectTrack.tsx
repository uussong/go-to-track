import { useRecoilValue } from 'recoil'
import { formIdState } from '@/stores/form'
import { useGetTracks } from '@/hooks/useGetTracks'
import { Button } from '../shared/button'

export default function SelectTrack({
  onPrevious,
}: {
  onPrevious: () => void
}) {
  const formId = useRecoilValue(formIdState)
  const albumId = formId.albumId
  const { data } = useGetTracks(albumId)

  const handlePrevious = () => {
    onPrevious()
  }
  return (
    <>
      <Button variant={'secondary'} onClick={handlePrevious}>
        이전
      </Button>
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
