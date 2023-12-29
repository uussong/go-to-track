import '../src/index.css'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/styles/globalStyles'

const preview = {
  decorators: [
    (Story) => (
      <>
        <Global styles={globalStyles} />
        <Story />
      </>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
