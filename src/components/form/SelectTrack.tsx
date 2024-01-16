import { useRecoilValue } from 'recoil'
import { css } from '@emotion/react'
import { formIdState } from '@/stores/form'
import { useGetTracks } from '@/hooks/useGetTracks'
import { Button } from '../shared/button'
import CompleteButton from './CompleteButton'
import { Text } from '../shared/text'
import TrackList from './TrackList'

export default function SelectTrack({
  onPrevious,
}: {
  onPrevious: () => void
}) {
  const formId = useRecoilValue(formIdState)
  const albumId = formId.albumId
  const { data } = useGetTracks(albumId)

  const handlePrevious = () => {
    onPrevious()
  }
  return (
    <>
      <Text variant={'heading2'}>수록곡 목록을 확인해주세요</Text>
      <TrackList data={data} />
      <div css={buttonGroupStyles}>
        <Button variant={'secondary'} onClick={handlePrevious}>
          이전
        </Button>
        <CompleteButton />
      </div>
    </>
  )
}

const buttonGroupStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`
