import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

export const auth = getAuth(app);