import SignOut from '@/components/shared/SignOut'
import { useUser } from '@/hooks/useUser'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  const user = useUser()
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={``}>Home</Link>
          </li>
          {user && <SignOut />}
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
