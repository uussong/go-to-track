import { ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { css } from '@emotion/react'
import { formTitleState } from '@/stores/form'
import { Button } from '@/components/shared/button'
import { ReactComponent as BackIcon } from '@/assets/icons/back.svg'

export default function Navbar() {
  const [formTitle, setFormTitle] = useRecoilState(formTitleState)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormTitle(e.target.value)
  }

  return (
    <div css={navbarStyles}>
      <Link to={`/myforms`}>
        <Button variant={'secondary'} size={'icon'} icon={<BackIcon />} />
      </Link>
      <input
        css={inputStyles}
        type="text"
        value={formTitle}
        onChange={handleInput}
        spellCheck={false}
      />
    </div>
  )
}

const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 100%;
`

const inputStyles = css`
  width: 150px;
`
