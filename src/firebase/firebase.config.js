// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt9xoTNoKDPAQaBpP7CcNd8hpP54LoJJ4",
  authDomain: "edupath-react-assignment.firebaseapp.com",
  projectId: "edupath-react-assignment",
  storageBucket: "edupath-react-assignment.appspot.com",
  messagingSenderId: "166959727691",
  appId: "1:166959727691:web:f23b259c49ec1f712c79ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;