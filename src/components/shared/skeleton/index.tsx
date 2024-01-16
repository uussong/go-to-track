import { colors } from '@/styles/colors'
import { css, keyframes } from '@emotion/react'

interface SkeletonProps {
  width: number
  height: number
  borderRadius?: number
}

export function Skeleton({ width, height, borderRadius }: SkeletonProps) {
  return (
    <div
      css={[
        skeletonStyles,
        css`
          width: ${width}px;
          height: ${height}px;
          border-radius: ${borderRadius}px;
        `,
      ]}
    ></div>
  )
}

const loading = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
`

const skeletonStyles = css`
  position: relative;
  overflow: hidden;
  background: ${colors.gray200};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    animation: ${loading} 1.5s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      ${colors.gray100},
      transparent
    );
  }
`
