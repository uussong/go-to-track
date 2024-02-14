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
import SpotifyAuth from './components/auth/SpotifyAuth'
import FormTitleCreatePage from './pages/FormTitleCreate'
import FormContentCreatePage from './pages/FormContentCreate'
import FormPage from './pages/Form'
import FormContentUpdate from './pages/FormContentUpdate'

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
      {
        path: 'form/:formId/create/title',
        element: <FormTitleCreatePage />,
      },
      {
        path: 'form/create/content',
        element: <FormContentCreatePage />,
      },
      {
        path: 'form/:formId',
        element: <FormPage />,
      },
      {
        path: 'form/edit/:formId',
        element: <FormContentUpdate />,
      },
    ],
  },
])

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SpotifyAuth>
          <AuthProvider>
            <AuthGuard>
              <RouterProvider router={router} />
            </AuthGuard>
          </AuthProvider>
        </SpotifyAuth>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
