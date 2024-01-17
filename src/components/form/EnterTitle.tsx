import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '../shared/button'
import { Text } from '../shared/text'
import { useSetRecoilState } from 'recoil'
import { formDataState } from '@/stores/form'

interface EnterTitleProps {
  onNext: (formTitle: string) => void
}

export default function EnterTitle({ onNext }: EnterTitleProps) {
  const setFormData = useSetRecoilState(formDataState)
  const [input, setInput] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNext(input)
    setFormData({ formTitle: input })
  }

  const handleClick = () => {
    onNext(input)
    setFormData({ formTitle: input })
  }

  return (
    <>
      <Text>수록곡 설문을 만들러 가봅시다</Text>
      <Text variant={'heading2'}>먼저 제목을 입력해주세요</Text>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <Button onClick={handleClick} disabled={input === ''}>
          계속
        </Button>
      </form>
    </>
  )
}
