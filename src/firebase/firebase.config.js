// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQqjGd3N2kUDdPNcXPMYW5aJgBO5By6I",
  authDomain: "recipe-web-store-decc1.firebaseapp.com",
  projectId: "recipe-web-store-decc1",
  storageBucket: "recipe-web-store-decc1.appspot.com",
  messagingSenderId: "476623213529",
  appId: "1:476623213529:web:d915cf729309edeaeaffc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;