// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "apikei",
  authDomain: "domain",
  projectId: "project-id",
  storageBucket: "firestage",
  messagingSenderId: "581332791982",
  appId: "1:456565765677777554",
  measurementId: "45678765432456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);