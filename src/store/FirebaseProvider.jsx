import { FirebaseContext } from "./FirebaseContext"
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(({ user }) => {
      setUser(user)
      navigate("/") // add o redirecionamento para a home
    })
  }

  const googleSignOut = async () => {
    signOut(auth)
   
  };
  
  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      // console.log(user);//console.log para ver o usuario logado no console
    });
    return () => {
      unsubscribe();
    }
  }, []);

  const value = {
    user,
    googleSignIn,
    googleSignOut
  }

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

FirebaseProvider.propTypes = {
  children: PropTypes.node
}