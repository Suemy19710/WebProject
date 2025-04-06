// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

    apiKey: "AIzaSyDLZr-WLcwyQLwLfxCzQr8rRzVz_Slwbvs",
    authDomain: "luatkimngoc-6de87.firebaseapp.com",
    projectId: "luatkimngoc-6de87",
    storageBucket: "luatkimngoc-6de87.firebasestorage.app",
    messagingSenderId: "770592871381",
    appId: "1:770592871381:web:c7a7f8c1dd63f2c04f635c",
    measurementId: "G-MRBFMHN5BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
// export const db = getFirestore(app);

export { storage };