import { useContext, useEffect, useState } from 'react'

import { onAuthStateChanged } from 'firebase/auth'

import { auth } from '@/remote/firebase'
import Loading from '../shared/Loading'
import { AuthContext } from '@/context/AuthProvider'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { setUser } = useContext(AuthContext)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setInitialized(true)
    })
  }, [setInitialized, setUser])

  if (initialized === false) {
    return <Loading />
  }

  return <>{children}</>
}
