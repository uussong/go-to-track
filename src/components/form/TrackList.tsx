export default function TrackList({ data }: { data: any }) {
  return (
    <section>
      {data.map((track: any) => (
        <div key={track.id}>
          <span>{track.track_number}</span>
          <span>{track.name}</span>
        </div>
      ))}
    </section>
  )
}
