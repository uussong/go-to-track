import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../../shared/button'
import { Text } from '../../shared/text'
import { useNavigate } from 'react-router-dom'

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
    <>
      <Text>수록곡 설문을 만들러 가봅시다</Text>
      <Text variant={'heading2'}>먼저 제목을 입력해주세요</Text>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <Button type={'submit'} disabled={input === ''}>
          계속
        </Button>
      </form>
    </>
  )
}
