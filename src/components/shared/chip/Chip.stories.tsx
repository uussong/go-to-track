import type { Meta, StoryFn } from '@storybook/react'
import { Chip } from '.'
import { useState } from 'react'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryFn<typeof meta>

export const Primary: Story = () => {
  const datas = [1, 2, 3]
  const initialSelected = datas.map(() => false)
  const [selected, setSelected] = useState<boolean[]>(initialSelected)
  const handleClick = (index: number) => {
    const checkSelected = [...selected]
    checkSelected[index] = !checkSelected[index]
    setSelected(checkSelected)
  }

  return (
    <ul
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '10px',
      }}
    >
      {datas.map((data, index) => (
        <Chip
          key={index}
          index={index + 1}
          label={`label ${data}`}
          selected={selected[index]}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  )
}
