import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC84A66eI7mSjueU49st-XiZRCZUbowwM",
  authDomain: "chat-app-2aefe.firebaseapp.com",
  projectId: "chat-app-2aefe",
  storageBucket: "chat-app-2aefe.appspot.com",
  messagingSenderId: "24384965303",
  appId: "1:24384965303:web:dfd492522ed65836bcdb32"
};

export const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app)

export default firestore