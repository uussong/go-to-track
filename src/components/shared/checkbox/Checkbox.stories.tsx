import type { Meta, StoryFn } from '@storybook/react'
import { Checkbox } from '.'
import { useState } from 'react'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryFn<typeof meta>

export const Primary: Story = () => {
  const datas = [1, 2, 3]
  const [isChecked, setIsChecked] = useState<boolean[]>(
    Array(datas.length).fill(false),
  )

  const handleCheck = (checkedIndex: number, checked: boolean) => {
    setIsChecked((prevData) =>
      prevData.map((value, idx) =>
        idx + 1 === checkedIndex ? checked : value,
      ),
    )
  }

  return (
    <ul>
      {datas.map((data, index) => (
        <Checkbox
          key={index}
          index={index + 1}
          label={`label ${data}`}
          checked={isChecked[index]}
          onClick={handleCheck}
        />
      ))}
    </ul>
  )
}
