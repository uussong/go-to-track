import { css } from '@emotion/react'
import { fonts } from './fonts'
import { colors } from './colors'

export const globalStyles = css`
  ${fonts}
  * {
    box-sizing: inherit;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    line-height: inherit;
    background-color: ${colors.gray200};
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
  ul,
  li {
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

  [contenteditable] {
    outline: none;
  }

  #root {
    max-width: 768px;
    margin: 0 auto;
    background-color: ${colors.white};
  }
`
