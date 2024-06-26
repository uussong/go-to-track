import { Dispatch, SetStateAction, createContext, useState } from 'react'

import { User } from 'firebase/auth'

interface AuthContextType {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
})

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
