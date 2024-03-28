import { ChangeEvent, FormEvent, useState } from 'react'
import { css } from '@emotion/react'
import { Button } from '../../shared/button'
import { Text } from '../../shared/text'
import { useNavigate } from 'react-router-dom'
import { TextInput } from '@/components/shared/textInput'

interface EnterTitleProps {
  setFormTitle: (formTitle: string) => void
}

export default function EnterTitle({ setFormTitle }: EnterTitleProps) {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormTitle(input)
    navigate(`/form/create/content`)
  }

  return (
    <section css={sectionStyles}>
      <Text variant={'heading2'}>투표 제목을 입력해주세요</Text>
      <form css={formStyles} onSubmit={handleSubmit}>
        <TextInput
          label={'투표 폼 제목'}
          value={input}
          onChange={handleInput}
        />
        <Button css={buttonStyles} type={'submit'} disabled={input === ''}>
          계속
        </Button>
      </form>
    </section>
  )
}

const sectionStyles = css`
  padding-top: 50px;
`

const formStyles = css`
  margin-top: 16px;
`

const buttonStyles = css`
  margin-top: 16px;
  float: right;
`
