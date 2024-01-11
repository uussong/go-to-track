import { colors } from '@/styles/colors'
import { flexCenter } from '@/styles/mixins'
import { css } from '@emotion/react'
import { Text } from '../shared/text'
import { Button } from '../shared/button'

interface DeleteConfirmModalProps {
  handleModalOpen: () => void
  onDelete: () => void
}

export default function DeleteConfirmModal({
  handleModalOpen,
  onDelete,
}: DeleteConfirmModalProps) {
  return (
    <div css={modalBackdrop} onClick={handleModalOpen}>
      <div css={modalDiv} onClick={(e) => e.stopPropagation()}>
        <Text variant={'bodyStrong'}>정말 삭제하시겠습니까?</Text>
        <Text variant={'detail'}>삭제한 글은 복구할 수 없어요.</Text>
        <div css={modalButtonGroup}>
          <Button variant={'secondary'} onClick={handleModalOpen}>
            취소
          </Button>
          <Button onClick={onDelete}>삭제</Button>
        </div>
      </div>
    </div>
  )
}

const modalBackdrop = css`
  position: fixed;
  inset: 0;
  ${flexCenter}
  background-color: rgba(0, 0, 0, 0.4);
`

const modalDiv = css`
  ${flexCenter}
  background-color: ${colors.white};
  padding: 24px;
  border-radius: 10px;
`

const modalButtonGroup = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`
