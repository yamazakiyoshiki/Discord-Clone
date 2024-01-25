import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import {GoogleAuthProvider, getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAQrRNwy-3I93ouXD94yHCG-Xl1wY0Wxs",
  authDomain: "discord-clone-79eff.firebaseapp.com",
  projectId: "discord-clone-79eff",
  storageBucket: "discord-clone-79eff.appspot.com",
  messagingSenderId: "230124308234",
  appId: "1:230124308234:web:dd5b031f240e3295785cf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, db};