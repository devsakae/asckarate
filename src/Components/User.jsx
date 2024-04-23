import React from 'react'
import { FirebaseProvider } from '../store/FirebaseProvider'

const User = () => {
  return (
    <FirebaseProvider>
      Menu para usuários.
      
    </FirebaseProvider>
  )
}

export default User