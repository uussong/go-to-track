import { Outlet } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Global } from '@emotion/react'
import { globalStyles } from './styles/globalStyles'

const queryClient = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <Outlet />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
