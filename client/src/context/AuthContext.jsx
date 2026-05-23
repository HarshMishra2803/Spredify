import { createContext, useState, useContext } from 'react'

const AuthContext = createContext() // ek global container 

export const AuthProvider = ({ children }) => {
// 2. Provider — jo poori app ko wrap karta hai
// children = poori app iske andar hogi

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null // user and token store karte ha local strogae mae sae
  )
  const [token, setToken] = useState(
    localStorage.getItem('token') || null
  )

  const login = (userData, tokenData) => {
    setUser(userData)
    setToken(tokenData)
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', tokenData)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)