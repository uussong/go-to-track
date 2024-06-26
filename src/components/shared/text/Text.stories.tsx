import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta = {
  title: 'Foundation/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Body: Story = {
  args: {
    children: 'Text',
  },
}
