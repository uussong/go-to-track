import { css } from '@emotion/react'
import { useGetTracks } from '@/hooks/useGetTracks'
import { Button } from '../shared/button'
import CompleteButton from './CompleteButton'
import { Text } from '../shared/text'
import TrackList from './TrackList'
import { FormIdData } from '@/models/form'

interface SelectTrackProps {
  formIdData: FormIdData
  onPrevious: () => void
}

export default function SelectTrack({
  formIdData,
  onPrevious,
}: SelectTrackProps) {
  const { data } = useGetTracks(formIdData.albumId)

  return (
    <>
      <Text variant={'heading2'}>수록곡 목록을 확인해주세요</Text>
      <TrackList data={data} />
      <div css={buttonGroupStyles}>
        <Button variant={'secondary'} onClick={onPrevious}>
          이전
        </Button>
        <CompleteButton formIdData={formIdData} />
      </div>
    </>
  )
}

const buttonGroupStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`
