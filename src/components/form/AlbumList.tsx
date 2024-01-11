import { AlbumListProps } from '@/models/album'

export default function AlbumList({ data }: AlbumListProps) {
  return (
    <>
      {data.map((album: any) => (
        <div key={album.id}>
          <img src={album.images[1].url} alt={album.name} />
          <p>{album.name}</p>
        </div>
      ))}
    </>
  )
}
