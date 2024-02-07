import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo'
import { FormData } from '@/models/form'

interface FormInfoProps {
  form: FormData
  onNext: () => void
}

export default function FormInfo({ form, onNext }: FormInfoProps) {
  const { data: artist } = useGetArtistInfo(form.artistId)
  const { data: album } = useGetAlbumInfo(form.albumId)

  return (
    <section>
      <div>
        <Text variant={'heading3'}>{artist.name}</Text>
        <Text variant={'heading2'}>{album.name}</Text>
        <img src={album.images[1].url} alt={album.name} />
      </div>
      <Button onClick={onNext}>투표하기</Button>
    </section>
  )
}
