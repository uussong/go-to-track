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

  const [selectedValues, setSelectedValues] = useState<number[]>([])

  const handleChipSelect = (clickedIndex: number, isSelected: boolean) => {
    setSelectedValues((prevValues) =>
      isSelected
        ? prevValues.filter((index) => index !== clickedIndex)
        : [...prevValues, clickedIndex],
    )
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
          selected={selectedValues.includes(index + 1)}
          onClick={(index, selected) => handleChipSelect(index, !selected)}
        />
      ))}
    </ul>
  )
}
