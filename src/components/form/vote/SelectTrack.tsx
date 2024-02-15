import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { css } from '@emotion/react'
import { Checkbox } from '@/components/shared/checkbox'
import { useGetAlbumInfo } from '@/hooks/useGetAlbumInfo'
import { TrackData } from '@/models/track'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { voteDataState } from '@/stores/form'

interface SelectTrackProps {
  albumId: string
  onNext: () => void
  nickname: string
}

export default function SelectTrack({
  albumId,
  onNext,
  nickname,
}: SelectTrackProps) {
  const { data: album } = useGetAlbumInfo(albumId)
  const tracks = album.tracks.items

  const [checkedIndexes, setCheckedIndexes] = useState<number[]>([])
  const setVoteData = useSetRecoilState(voteDataState)

  const handleCheck = (index: number) => {
    setCheckedIndexes((prevIndexes) => {
      return prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [index]
    })
  }

  useEffect(() => {
    setVoteData((voteData) => ({
      ...voteData,
      vote: { albumId, selectedTrack: checkedIndexes },
    }))
  }, [checkedIndexes, albumId, setVoteData])

  const handleSubmit = () => {
    onNext()
  }

  return (
    <section css={sectionStyles}>
      <div>
        <div css={textGroupStyles}>
          <Text variant={'heading2'}>
            {nickname}님의 <Text variant={'bodyStrong'}>{album.name} </Text>
            최애곡은?
          </Text>
        </div>
        <ul css={ulStyles}>
          {tracks.map((track: TrackData, index: number) => (
            <Checkbox
              key={track.id}
              index={track.track_number}
              label={track.name}
              checked={checkedIndexes.includes(index + 1)}
              onClick={handleCheck}
            />
          ))}
        </ul>
      </div>
      <Button onClick={handleSubmit} disabled={checkedIndexes.length === 0}>
        제출하기
      </Button>
    </section>
  )
}

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  flex-grow: 1;
`

const textGroupStyles = css`
  margin-bottom: 16px;
`

const ulStyles = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
