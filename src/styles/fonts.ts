import { css } from '@emotion/react'
import NotoSansKRRegularWoff2 from '../assets/fonts/NotoSansKR-Regular.woff2'
import NotoSansKRRegularWoff from '../assets/fonts/NotoSansKR-Regular.woff'
import NotoSansKRRegularTtf from '../assets/fonts/NotoSansKR-Regular.ttf'
import NotoSansKMediumWoff2 from '../assets/fonts/NotoSansKR-Medium.woff2'
import NotoSansKMediumWoff from '../assets/fonts/NotoSansKR-Medium.woff'
import NotoSansKMediumTtf from '../assets/fonts/NotoSansKR-Medium.ttf'
import NotoSansKSemiBoldWoff2 from '../assets/fonts/NotoSansKR-SemiBold.woff2'
import NotoSansKSemiBoldWoff from '../assets/fonts/NotoSansKR-SemiBold.woff'
import NotoSansKSemiBoldTtf from '../assets/fonts/NotoSansKR-SemiBold.ttf'
import NotoSansKRBoldWoff2 from '../assets/fonts/NotoSansKR-Bold.woff2'
import NotoSansKRBoldWoff from '../assets/fonts/NotoSansKR-Bold.woff'
import NotoSansKRBoldTtf from '../assets/fonts/NotoSansKR-Bold.ttf'

export const fonts = css`
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 400;
    font-style: normal;
    src:
      url(${NotoSansKRRegularWoff2}) format('woff2'),
      url(${NotoSansKRRegularWoff}) format('woff'),
      url(${NotoSansKRRegularTtf}) format('truetype');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 500;
    font-style: normal;
    src:
      url(${NotoSansKMediumWoff2}) format('woff2'),
      url(${NotoSansKMediumWoff}) format('woff'),
      url(${NotoSansKMediumTtf}) format('truetype');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 600;
    font-style: normal;
    src:
      url(${NotoSansKSemiBoldWoff2}) format('woff2'),
      url(${NotoSansKSemiBoldWoff}) format('woff'),
      url(${NotoSansKSemiBoldTtf}) format('truetype');
    font-display: block;
  }
  @font-face {
    font-family: 'NotoSansKR';
    font-weight: 700;
    font-style: normal;
    src:
      url(${NotoSansKRBoldWoff2}) format('woff2'),
      url(${NotoSansKRBoldWoff}) format('woff'),
      url(${NotoSansKRBoldTtf}) format('truetype');
    font-display: block;
  }

  body {
    font-family: 'NotoSansKR';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
