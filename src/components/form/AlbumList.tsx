import { AlbumListProps } from '@/models/album'
import { FormDataProps } from '@/models/form'
import { formState } from '@/stores/form'
import { useSetRecoilState } from 'recoil'

export default function AlbumList({ data }: AlbumListProps) {
  const setFormData = useSetRecoilState(formState)

  const handleSelectAlbum = (albumId: string) => {
    setFormData((prevData: FormDataProps) => ({
      ...prevData,
      albumId: albumId,
    }))
  }
  return (
    <>
      {data.map((album: any) => (
        <div key={album.id} onClick={() => handleSelectAlbum(album.id)}>
          <img src={album.images[1].url} alt={album.name} />
          <p>{album.name}</p>
        </div>
      ))}
    </>
  )
}
