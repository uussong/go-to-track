import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'
import { colors } from '@/styles/colors'

const meta = {
  title: 'Foundation/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    variant: 'heading1',
    color: colors.gray900,
    children: 'Text',
  },
}
