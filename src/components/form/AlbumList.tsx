import { useSetRecoilState } from 'recoil'
import { css } from '@emotion/react'
import { AlbumData } from '@/models/album'
import { FormDataProps } from '@/models/form'
import { formIdState } from '@/stores/form'

interface AlbumListProps {
  data: AlbumData[]
  onNext: () => void
}

export default function AlbumList({ data, onNext }: AlbumListProps) {
  const setFormId = useSetRecoilState(formIdState)

  const handleSelectAlbum = (albumId: string) => {
    setFormId((prevData: FormDataProps) => ({
      ...prevData,
      albumId: albumId,
    }))
  }

  const handleNext = () => {
    onNext()
  }

  return (
    <section css={sectionStyles}>
      {data.map((album: any) => (
        <article
          key={album.id}
          onClick={() => {
            handleSelectAlbum(album.id)
            handleNext()
          }}
        >
          <img src={album.images[1].url} alt={album.name} />
          <p>{album.name}</p>
        </article>
      ))}
    </section>
  )
}

const sectionStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
