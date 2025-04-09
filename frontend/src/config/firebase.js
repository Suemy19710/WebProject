// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// import { getAuth } from 'firebase/auth'
// export const process.env.REACT_APP_API_URL = import.meta.env.VITE_process.env.REACT_APP_API_URL;
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APP_ID,
//     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
//   };
  
  
// const validateEnv = () => {
//     if (!process.env.REACT_APP_API_URL) {
//       console.error('process.env.REACT_APP_API_URL is not defined in environment variables');
//     }
    
//     const requiredFirebaseFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
//     const missingFields = requiredFirebaseFields.filter(field => !firebaseConfig[field]);
    
//     if (missingFields.length > 0) {
//       console.error(`Firebase configuration is missing required fields: ${missingFields.join(', ')}`);
//     }
//   };
  
//   validateEnv();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);
// const auth = getAuth(app);

// export { storage, auth, analytics, app };