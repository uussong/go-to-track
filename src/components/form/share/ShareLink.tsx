import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { css, keyframes } from '@emotion/react'
import { colors } from '@/styles/colors'

export default function ShareLink() {
  const [stateType, setStateType] = useState('')
  const { formId } = useParams()
  const shareLink = `${window.location.origin}/vote/${formId}`

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
      setStateType('success')
    } catch (error) {
      console.error(error)
      setStateType('error')
    } finally {
      setTimeout(() => {
        setStateType('')
      }, 3000)
    }
  }

  return (
    <>
      <Button variant={'secondary'} onClick={copyLink}>
        공유
      </Button>
      {stateType === 'success' ? (
        <div css={messageStyles(stateType)}>
          <Text css={messageTextStyles(stateType)}>링크가 복사되었어요!</Text>
        </div>
      ) : stateType === 'error' ? (
        <div css={messageStyles(stateType)}>
          <Text css={messageTextStyles(stateType)}>다시 시도해 주세요.</Text>
        </div>
      ) : null}
    </>
  )
}

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const messageStyles = (stateType: string) => css`
  position: absolute;
  right: 16px;
  background-color: ${stateType === 'success' ? colors.gray200 : colors.red};
  padding: 12px 16px;
  border-radius: 10px;
  animation: ${fadeInOut} 3s ease-in-out;
`

const messageTextStyles = (stateType: string) => css`
  color: ${stateType === 'success' ? colors.black : colors.white};
`
