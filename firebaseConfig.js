// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// STEP 1: Declare Firebase Environment Variables  
// Your web app's Firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyACk8TPPj-oLG4zi2Ade9RsfT6SUImA-vQ",
    authDomain: "gdscworkshop-731d4.firebaseapp.com",
    projectId: "gdscworkshop-731d4",
    storageBucket: "gdscworkshop-731d4.appspot.com",
    messagingSenderId: "1012804802799",
    appId: "1:1012804802799:web:3838f39a42f3a0840c231a"
  };

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
