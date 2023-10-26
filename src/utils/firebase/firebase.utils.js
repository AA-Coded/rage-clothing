import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBJRfyjvP9LvHEcxkmG3PeVHU4RJtwImIc",
    authDomain: "rage-clothing-db.firebaseapp.com",
    projectId: "rage-clothing-db",
    storageBucket: "rage-clothing-db.appspot.com",
    messagingSenderId: "788869933757",
    appId: "1:788869933757:web:80b6bfa15ab6fd371e65d4"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)