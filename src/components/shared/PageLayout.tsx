import { ReactNode } from 'react'
import { SerializedStyles, css } from '@emotion/react'
import { flexColumn } from '@/styles/mixins'

interface PageLayoutProps {
  children: ReactNode
  styles?: SerializedStyles
}

export default function PageLayout({ children, styles }: PageLayoutProps) {
  return <main css={[main, styles]}>{children}</main>
}

const main = css`
  ${flexColumn}
  width: 100%;
  min-height: 100vh;
  padding: 64px 16px 16px;
`
