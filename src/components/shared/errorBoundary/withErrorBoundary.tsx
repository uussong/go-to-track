import { ComponentType, ReactNode } from 'react'
import ErrorBoundary from './ErrorBoundary'

function withErrorBoundary<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
  options: { fallback: ReactNode },
) {
  return function ErrorBoundaryComponent(props: Props) {
    return (
      <ErrorBoundary fallback={options.fallback}>
        <WrappedComponent {...(props as any)} />
      </ErrorBoundary>
    )
  }
}

export default withErrorBoundary
