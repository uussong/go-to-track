import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '.'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    width: 300,
    height: 200,
  },
}
export const Circle: Story = {
  args: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
}
