// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCmF2DbMXhVjXnp0D-d195ufY0tFcsKJw4',
  authDomain: 'noticeboard-for-internationals.firebaseapp.com',
  projectId: 'noticeboard-for-internationals',
  storageBucket: 'noticeboard-for-internationals.appspot.com',
  messagingSenderId: '182353879256',
  appId: '1:182353879256:web:b1a8b8646781e2862b77ad',
  measurementId: 'G-260XQ08EXV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
