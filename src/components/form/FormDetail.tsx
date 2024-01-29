import { useState } from 'react'
import { ArtistData } from '@/models/artist'
import { FormData } from '@/models/form'
import { Text } from '../shared/text'
import { SingleAlbumData } from '@/models/album'
import { Button } from '../shared/button'

interface formDetailProps {
  form: FormData
  artist: ArtistData
  album: SingleAlbumData
}

export default function FormDetail({ form, artist, album }: formDetailProps) {
  const [isTrackListVisible, setIsTrackListVisible] = useState(false)
  const tracks = album.tracks.items

  const toggleTrackListVisible = () => {
    setIsTrackListVisible(!isTrackListVisible)
  }

  return (
    <section>
      <Text variant={'heading2'}>{form.formTitle}</Text>
      <article>
        <img src={artist.images[2].url} alt={artist.name} />
        <Text variant={'bodyStrong'}>{artist.name}</Text>
      </article>
      <article>
        <img src={album.images[1].url} alt={album.name} />
        <div>
          <div>
            <Text variant={'bodyStrong'}>{album.name}</Text>
            <Button variant={'primary'} onClick={toggleTrackListVisible}>
              수록곡 보기
            </Button>
          </div>
          {isTrackListVisible && (
            <ul>
              {tracks.map((track) => (
                <li>
                  <Text key={track.id}>{track.name}</Text>
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </section>
  )
}
