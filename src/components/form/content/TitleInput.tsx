import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { css } from '@emotion/react'
import { formTitleState } from '@/stores/form'

export default function TitleInput() {
  const [formTitle, setFormTitle] = useRecoilState(formTitleState)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormTitle(e.target.value)
  }

  return (
    <input
      css={inputStyles}
      type="text"
      value={formTitle}
      onChange={handleInput}
      spellCheck={false}
    />
  )
}

const inputStyles = css`
  cursor: pointer;
`
