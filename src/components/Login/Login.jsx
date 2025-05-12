import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

import auth from '../../Firebase/firebase.init';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        console.log("Google Sign In successful:", result);
        setUser(result.user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google Sign In error:", error);
        setUser(null);
      });

  };
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
          .then((result) => {
            // Handle successful sign-in
            console.log("Github Sign In successful:", result);
            setUser(result.user);
          })
          .catch((error) => {
            // Handle errors
            console.error("Github Sign In error:", error);
            setUser(null);
          });
    }

    const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign-out error:", error);
      });
    }
  return (
    <div>
   
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : <div>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubSignIn}>Login with Github</button>
        </div>}
        {user && (
          <div>
            <h2>Welcome, {user.displayName}</h2>
            <p>Your email: {user.email}</p>
          </div>
        )}
    </div>
  )
}

export default Login