import { css } from '@emotion/react'

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const flexColumn = css`
  display: flex;
  flex-direction: column;
`
export const flexColumnCenter = css`
  ${flexCenter}
  ${flexColumn}
`
