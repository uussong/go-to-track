import type { Meta, StoryFn } from '@storybook/react'
import { Modal } from '.'
import { Text } from '../text'
import { useModal } from '@/hooks/useModal'
import { Button } from '../button'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryFn<typeof meta>

export const Primary: Story = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div>
      <Button onClick={openModal}>OPEN</Button>
      {isOpen && (
        <Modal onClick={closeModal}>
          <Modal.Body>
            <Text variant={'heading2'}>정말 삭제하시겠습니까?</Text>
            <Text variant={'detail'}>삭제한 글은 복구할 수 없어요.</Text>
          </Modal.Body>
          <Modal.Actions
            primary={'삭제'}
            secondary={'돌아가기'}
            onAction={() => {}}
            onClose={closeModal}
          ></Modal.Actions>
        </Modal>
      )}
    </div>
  )
}
