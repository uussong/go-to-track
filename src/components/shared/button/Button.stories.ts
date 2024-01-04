import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
}
export const Fill: Story = {
  args: {
    size: 'fill',
    children: '해보기',
  },
}
