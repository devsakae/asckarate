import React, { useContext } from 'react'

import GoogleButton from 'react-google-button';
import { FirebaseContext } from '../store/FirebaseContext';

const User = () => {
  const { googleSignIn, googleSignOut } = useContext(FirebaseContext);
 

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
      
    } catch (err) {
      console.error(err);
    }
  }

  const handleGoogleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      Menu para usuários.
      <GoogleButton
        type='dark'
        label='Faça seu login'
        onClick={handleGoogleSignIn}
      />
      <button onClick={handleGoogleSignOut}>Logout</button>
    </div>
  )
}

export default User