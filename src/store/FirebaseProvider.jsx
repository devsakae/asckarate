import { FirebaseContext } from "./FirebaseContext"
import { useState } from "react";
import { GoogleAuthProvider, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    .then(({ user }) => setUser(user))
  }

  const googleSignOut = async () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
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