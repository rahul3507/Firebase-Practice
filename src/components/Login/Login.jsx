import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';

import auth from '../../Firebase/firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        console.log("Google Sign In successful:", result);
      })
      .catch((error) => {
        // Handle errors
        console.error("Google Sign In error:", error);
      });
  };

  return (
    <div>
        <button onClick={handleGoogleSignIn}>Login with Google</button>
    </div>
  )
}

export default Login