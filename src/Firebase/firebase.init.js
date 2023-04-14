// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHT4twBnjKVK70eu4zWp1kVTJTV4S2sLc",
    authDomain: "my-first-firebase-7fc5b.firebaseapp.com",
    projectId: "my-first-firebase-7fc5b",
    storageBucket: "my-first-firebase-7fc5b.appspot.com",
    messagingSenderId: "563686964524",
    appId: "1:563686964524:web:c3d8ba2611e08990dc4089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;