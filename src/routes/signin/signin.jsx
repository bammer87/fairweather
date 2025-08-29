import { signInWithGoogle, createUser } from "../../utils/firebase/firebase";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userRef = await createUser(user);
  };
  return (
    <div className="signin-container pt-[6rem]">
      <h2>Signin</h2>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default Signin;
