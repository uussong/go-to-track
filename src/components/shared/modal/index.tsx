import { ReactNode } from 'react'
import { css } from '@emotion/react'
import { Button } from '../button'
import { flexCenter, flexColumn } from '@/styles/mixins'
import { colors } from '@/styles/colors'

interface PropsWithChildren {
  children: ReactNode
}

interface ModalProps {
  children: ReactNode
  onClick: () => void
}

interface ModalActionsProps {
  primary: ReactNode
  secondary?: ReactNode
  onAction: () => void
  onClose?: () => void
}

export function Modal({ children, onClick }: ModalProps) {
  return (
    <div css={ModalStyles}>
      <div css={BackdropStyles} onClick={onClick}></div>
      <div css={ModalContentStyles}>{children}</div>
    </div>
  )
}

function ModalBody({ children }: PropsWithChildren) {
  return <div css={ModalBodyStyles}>{children}</div>
}

function ModalActions({
  primary,
  secondary,
  onAction,
  onClose,
}: ModalActionsProps) {
  return (
    <div css={ButtonGroupStyles}>
      {secondary && (
        <Button variant={'secondary'} onClick={onClose}>
          {secondary}
        </Button>
      )}
      <Button onClick={onAction}>{primary}</Button>
    </div>
  )
}

const ModalStyles = css`
  position: fixed;
  inset: 0;
  ${flexCenter}
  padding: 64px 48px;
`

const ModalContentStyles = css`
  ${flexColumn}
  gap: 24px;
  width: 100%;
  max-width: 500px;
  max-height: 100%;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 24px;
  z-index: 10;
`

const ModalBodyStyles = css`
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`

const BackdropStyles = css`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const ButtonGroupStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

Modal.Body = ModalBody
Modal.Actions = ModalActions
