import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCFI8buOnWAnKuZ_aRALJtrROoViMajf1M",
  authDomain: "curd-f11bf.firebaseapp.com",
  projectId: "curd-f11bf",
  storageBucket: "curd-f11bf.appspot.com",
  messagingSenderId: "247119158663",
  appId: "1:247119158663:web:d01307fb7a0b59c08e8722",
  measurementId: "G-9XFRYC4H0E"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);