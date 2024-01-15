import type { Meta, StoryFn } from '@storybook/react'
import { Chip } from '.'
import { useRef } from 'react'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryFn<typeof meta>

export const Primary: Story = () => {
  const datas = [1, 2, 3]
  const chipRefs = datas.map(() => useRef<HTMLLIElement | null>(null))

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
          chipRef={chipRefs[index]}
        />
      ))}
    </ul>
  )
}
