import { ChangeEvent, useState } from 'react'
import { css } from '@emotion/react'
import { Button } from '@/components/shared/button'
import { Text } from '@/components/shared/text'
import { flexColumnCenter } from '@/styles/mixins'
import { TextInput } from '@/components/shared/textInput'

interface FormEnterProps {
  formTitle: string
  onNext: (nickname: string) => void
}

export default function FormEnter({ formTitle, onNext }: FormEnterProps) {
  const [nickname, setNickname] = useState('')
  console.log(nickname)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const getNickname = () => {
    onNext(nickname)
  }

  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'}>{formTitle}</Text>
      <TextInput
        css={inputStyles}
        label={'닉네임 입력'}
        placeholder={'닉네임을 입력해 주세요.'}
        onChange={handleInputChange}
      />
      <Button onClick={getNickname}>시작하기</Button>
    </section>
  )
}

const sectionStyles = css`
  ${flexColumnCenter}
  gap: 50px;
  flex-grow: 1;
`

const inputStyles = css`
  text-align: center;

  ::placeholder {
    text-align: center;
  }
`
