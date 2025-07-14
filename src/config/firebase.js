import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCf437gzZZZn4CinDiozd79ZHL_5dlUAS8",
  authDomain: "ai-resume-and-cover-lett-8cb6e.firebaseapp.com",
  projectId: "ai-resume-and-cover-lett-8cb6e",
  storageBucket: "ai-resume-and-cover-lett-8cb6e.firebasestorage.app",
  messagingSenderId: "721288755160",
  appId: "1:721288755160:web:0a341cf5cc2e7b894364ad",
  measurementId: "G-4VT5SBE910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
