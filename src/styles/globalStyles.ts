import { css } from '@emotion/react'
import { fonts } from './fonts'
import { css } from '@emotion/react'

export const globalStyles = css`
  ${fonts}
`

export const globalStyles = css`
  * {
    box-sizing: inherit;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    line-height: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    color: inherit;
    border: none;
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  button {
    appearance: button;
    background: transparent;
  }

  button,
  select {
    text-transform: none;
  }

  a,
  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }
`
