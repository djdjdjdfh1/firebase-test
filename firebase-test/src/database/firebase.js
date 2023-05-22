// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH,
  projectId: "fir-test-7456b",
  storageBucket: "fir-test-7456b.appspot.com",
  messagingSenderId: "89275353199",
  appId: "1:89275353199:web:90f6bdab8245bb445fe59a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 사용하고자하는 서비스를 들고와서 사용 
// 인증서비스에 관한 내용 들고와서 사용
export const auth = getAuth(app);