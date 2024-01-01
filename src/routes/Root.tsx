import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={``}>Home</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
