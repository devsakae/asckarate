import React, { useContext } from 'react'
import { FirebaseProvider } from '../store/FirebaseProvider'
import GoogleButton from 'react-google-button';
import { FirebaseContext } from '../store/FirebaseContext';

const User = () => {
  const { googleSignIn } = useContext(FirebaseContext);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <FirebaseProvider>
      <div>

      Menu para usuários.
      <GoogleButton
        type='dark'
        label='Faça seu login'
        onClick={handleGoogleSignIn}
      />
      </div>
    </FirebaseProvider>
  )
}

export default User