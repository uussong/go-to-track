import type { Meta, StoryFn } from '@storybook/react'

import { Chip } from '.'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryFn<typeof meta>

export const Primary: Story = () => {
  const datas = [1, 2, 3]
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
        <Chip index={index + 1} label={`label ${data}`} />
      ))}
    </ul>
  )
}
