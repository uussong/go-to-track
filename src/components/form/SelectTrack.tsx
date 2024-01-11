import { useGetTracks } from '@/hooks/useGetTracks'

export default function SelectTrack({ albumId }: { albumId: string }) {
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
