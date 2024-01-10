import { ArtistInfoProps } from '@/models/artist'

export default function ArtistInfo({ data }: ArtistInfoProps) {
  return (
    <>
      {data.length > 0 && (
        <>
          <img
            src={data[0].images[1] && data[0].images[1].url}
            alt={data[0].name}
          />
          <p>{data[0].name}</p>
        </>
      )}
      {data.length === 0 && <p>찾는 가수가 없어요</p>}
    </>
  )
}
