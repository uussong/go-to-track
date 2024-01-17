import { TrackData } from '@/models/track'

interface TrackListProps {
  data: TrackData[]
}

export default function TrackList({ data }: TrackListProps) {
  return (
    <section>
      {data.map((track: TrackData) => (
        <div key={track.id}>
          <span>{track.track_number}</span>
          <span>{track.name}</span>
        </div>
      ))}
    </section>
  )
}
