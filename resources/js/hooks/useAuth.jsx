import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { AuthContext } from '../context/AuthContext'

export const useAuth = () => {
  
  const context = useContext(AuthContext)

  if (context === undefined) {
    
    throw new Error('useAth must be used within a AuthProvider')
  }

  return context
}