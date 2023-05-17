import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcgAC6JDRuOD5mJi_SYpuEF6nVchwziDA",
  authDomain: "cm-app-386913.firebaseapp.com",
  projectId: "cm-app-386913",
  storageBucket: "cm-app-386913.appspot.com",
  messagingSenderId: "646790379656",
  appId: "1:646790379656:web:1a47a9de0b29079c55473d"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };
