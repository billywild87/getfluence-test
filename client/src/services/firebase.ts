
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAUMGUIHbzJPdEAPcY4by1v6bgnzaXysJ4",
  authDomain: "getfluence-app.firebaseapp.com",
  projectId: "getfluence-app",
  storageBucket: "getfluence-app.appspot.com",
  messagingSenderId: "920247322405",
  appId: "1:920247322405:web:cfe61e97733f92b53e7ccc",
  measurementId: "G-6MKQFNZ03S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export async function getToken(refresh:boolean){
  return getAuth(app)?.currentUser?.getIdToken(refresh)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth:auth,
  db:db
}


