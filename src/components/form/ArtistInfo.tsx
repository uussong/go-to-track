import { ArtistInfoProps } from '@/models/artist'

export default function ArtistInfo({ data }: ArtistInfoProps) {
  return (
    <>
      <img
        src={data[0].images[1] && data[0].images[1].url}
        alt={data[0].name}
      />
      <p>{data[0].name}</p>
    </>
  )
}
