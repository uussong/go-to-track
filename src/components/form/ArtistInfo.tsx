import { ArtistInfoProps } from '@/models/artist'
import Loading from '../shared/Loading'

export default function ArtistInfo({ data, isLoading }: ArtistInfoProps) {
  if (isLoading) return <Loading />

  return (
    <>
      {data && data.length > 0 && (
        <>
          <img
            src={data[0].images[1] && data[0].images[1].url}
            alt={data[0].name}
          />
          <p>{data[0].name}</p>
        </>
      )}
      {data && data.length === 0 && <p>찾는 가수가 없어요</p>}
    </>
  )
}
