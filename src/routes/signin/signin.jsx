import {
  signInWithGoogle,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div className="signin-container pt-[6rem]">
      <h2>Signin</h2>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default Signin;
