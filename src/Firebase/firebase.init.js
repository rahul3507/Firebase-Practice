//don't store config in the client side


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb1QKuU4P_cMMH1Zv-2To1x8AX7bZT9cw",
  authDomain: "fir-practice-a7073.firebaseapp.com",
  projectId: "fir-practice-a7073",
  storageBucket: "fir-practice-a7073.firebasestorage.app",
  messagingSenderId: "49243627601",
  appId: "1:49243627601:web:9c62b1675a8dc74ed99870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;