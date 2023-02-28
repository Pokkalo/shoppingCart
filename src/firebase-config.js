import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOVzzuXOtxKH-IcmDggwwoFoenAhPE0Qs",
  authDomain: "web-design-bc9b8.firebaseapp.com",
  projectId: "web-design-bc9b8",
  storageBucket: "web-design-bc9b8.appspot.com",
  messagingSenderId: "10086557833",
  appId: "1:10086557833:web:9c998f04853f3e7b5e7e58"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName
    const email = result.user.email
    const profilePic = result.user.photoURL
    
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("profilePic", profilePic)
  }).catch((error) => {
    console.log(error.message)
  })

}