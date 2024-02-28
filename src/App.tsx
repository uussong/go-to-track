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
import FormSharePage from './pages/FormShare'
import FormContentUpdatePage from './pages/FormContentUpdate'
import ResultPage from './pages/Result'
import VotePage from './pages/Vote'

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
        path: 'form/create/title',
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
        path: 'form/share/:formId',
        element: <FormSharePage />,
      },
      {
        path: 'form/edit/:formId',
        element: <FormContentUpdatePage />,
      },
      {
        path: 'form/result/:formId',
        element: <ResultPage />,
      },
      {
        path: 'vote/:formId',
        element: <VotePage />,
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
