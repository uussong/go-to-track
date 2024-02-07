import type { Meta, StoryFn } from '@storybook/react'
import { TextInput } from '.'
import { useState } from 'react'

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryFn<typeof meta>

export const Primary: Story = () => {
  const [searchInput, setSearchInput] = useState('')
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }
  return (
    <TextInput
      label={'가수 검색'}
      value={searchInput}
      onChange={handleInput}
      placeholder={'placeholder'}
    />
  )
}
