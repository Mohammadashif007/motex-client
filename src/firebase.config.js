// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgJbDXcwDs4GzGEgpukaCngMgwhP6qFbk",
  authDomain: "motex-beeef.firebaseapp.com",
  projectId: "motex-beeef",
  storageBucket: "motex-beeef.appspot.com",
  messagingSenderId: "362308136630",
  appId: "1:362308136630:web:c0ebc2e596306e19f4c017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;