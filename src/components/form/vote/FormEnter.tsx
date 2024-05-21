import { ChangeEvent, FormEvent, useState } from 'react'
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNext(nickname)
  }

  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'}>{formTitle}</Text>
      <form css={formStyles} onSubmit={handleSubmit}>
        <TextInput
          css={inputStyles}
          label={'닉네임 입력'}
          placeholder={'닉네임을 입력해 주세요.'}
          value={nickname}
          onChange={handleInputChange}
        />
        <Button type="submit" disabled={nickname === ''}>
          시작하기
        </Button>
      </form>
    </section>
  )
}

const sectionStyles = css`
  ${flexColumnCenter}
  gap: 50px;
  flex-grow: 1;
`

const formStyles = css`
  ${flexColumnCenter}
  gap: 50px;
`

const inputStyles = css`
  text-align: center;

  ::placeholder {
    text-align: center;
  }
`
