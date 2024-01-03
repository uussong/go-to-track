import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Root from './routes/Root'
import ErrorPage from './routes/RouteError'
import HomePage from './pages/Home'
import SignInPage from './pages/SignIn'
import MyFormsPage from './pages/MyForms'
import AuthGuard from './components/auth/AuthGuard'
import AuthProvider from './context/AuthProvider'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
      },
      {
        path: 'myforms',
        element: <MyFormsPage />,
      },
    ],
  },
])

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AuthGuard>
            <RouterProvider router={router} />
          </AuthGuard>
        </AuthProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
