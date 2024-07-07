// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };
const firebaseConfig = {
    apiKey: "AIzaSyBNkeVEeaLqWcBoeszaTTq1FZrIo02VrnY",
    authDomain: "event-ease-cc06b.firebaseapp.com",
    projectId: "event-ease-cc06b",
    storageBucket: "event-ease-cc06b.appspot.com",
    messagingSenderId: "235434388836",
    appId: "1:235434388836:web:0714578a1fdc2d75bade71"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
