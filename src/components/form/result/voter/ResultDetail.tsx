import { Text } from '@/components/shared/text'
import { SingleAlbumData } from '@/models/album'
import { VoteData } from '@/models/vote'

interface ResultDetailProps {
  data: VoteData
  album: SingleAlbumData
}
export default function ResultDetail({ data, album }: ResultDetailProps) {
  const selectedTrackNumbers = data.vote.selectedTrack
  const selectedTracks = selectedTrackNumbers.map((trackNumber) => {
    const selectedTrack = album.tracks.items[trackNumber - 1]
    return selectedTrack
  })

  return (
    <div>
      <Text>
        {data.nickname}의 {album.name} 최애곡
      </Text>
      {selectedTracks.map((selectedTrack) => (
        <Text key={selectedTrack.id} variant={'bodyStrong'}>
          {selectedTrack.name}
        </Text>
      ))}
    </div>
  )
}
