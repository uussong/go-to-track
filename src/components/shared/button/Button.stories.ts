import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Button',
  },
}
export const Fill: Story = {
  args: {
    size: 'fill',
    text: '해보기',
  },
}
