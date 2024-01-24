import React, { ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  fallback: React.ElementType
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('error: ', error)
    console.log('errorInfo: ', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <this.props.fallback />
    }
    return this.props.children
  }
}

export default ErrorBoundary
