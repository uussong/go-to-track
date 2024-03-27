import { SerializedStyles, css } from '@emotion/react'
import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  styles?: SerializedStyles
}

export default function PageLayout({ children, styles }: PageLayoutProps) {
  return <main css={[main, styles]}>{children}</main>
}

const main = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 64px 16px 16px;
`
