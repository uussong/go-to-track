import { css } from '@emotion/react'

export const flexCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const a11yHidden = css`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`
