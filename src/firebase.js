// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-lBOEjOT0Jo8wXVVMowcT59eB8EBpVnk",
  authDomain: "realtor-clone-react-66984.firebaseapp.com",
  projectId: "realtor-clone-react-66984",
  storageBucket: "realtor-clone-react-66984.appspot.com",
  messagingSenderId: "147343721371",
  appId: "1:147343721371:web:4940739e0c904d99f0173e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();