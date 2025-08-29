// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFhGn1gwiMC8wHg8L3V8GeIEniLXa6g_s",
  authDomain: "fairweather-db.firebaseapp.com",
  projectId: "fairweather-db",
  storageBucket: "fairweather-db.firebasestorage.app",
  messagingSenderId: "521353990722",
  appId: "1:521353990722:web:fe861e68fd274664fdd3db",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Initialize database
export const db = getFirestore();

//Create new user
export const createUser = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
