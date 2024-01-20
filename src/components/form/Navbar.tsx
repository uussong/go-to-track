import { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { css } from '@emotion/react'
import { formDataState } from '@/stores/form'
import { Text } from '@/components/shared/text'

export default function Navbar() {
  const [formData, setFormData] = useRecoilState(formDataState)
  const formTitle = formData.formTitle
  console.log(formTitle)
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ formTitle: e.target.value })
  }

  return (
    <>
      <Link to={`/myforms`}>My forms</Link>
      <Text variant={'detail'}> / </Text>
      <input
        css={inputStyles}
        type="text"
        value={formTitle}
        onChange={handleInput}
      />
    </>
  )
}

const inputStyles = css`
  width: 150px;
`
