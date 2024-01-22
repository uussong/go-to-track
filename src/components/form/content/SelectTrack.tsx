import { css } from '@emotion/react'
import { useGetTracks } from '@/hooks/useGetTracks'
import { Button } from '../../shared/button'
import CompleteButton from '../CompleteButton'
import { Text } from '../../shared/text'
import TrackList from './TrackList'

interface SelectTrackProps {
  albumId: string
  onPrevious: () => void
  onComplete: () => void
}

export default function SelectTrack({
  albumId,
  onPrevious,
  onComplete,
}: SelectTrackProps) {
  const { data } = useGetTracks(albumId)

  return (
    <>
      <Text variant={'heading2'}>수록곡 목록을 확인해주세요</Text>
      <TrackList data={data} />
      <div css={buttonGroupStyles}>
        <Button variant={'secondary'} onClick={onPrevious}>
          이전
        </Button>
        <CompleteButton onComplete={onComplete} />
      </div>
    </>
  )
}

const buttonGroupStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`
