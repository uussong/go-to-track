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
  width: 100%;
  min-height: 100vh;
  padding: 72px 16px 0;
`
