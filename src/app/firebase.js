// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApW65HOsuTCv_RRSB7gCzSdzcKby_xfss",
    authDomain: "app-web-6e519.firebaseapp.com",
    databaseURL: "https://app-web-6e519-default-rtdb.firebaseio.com",
    projectId: "app-web-6e519",
    storageBucket: "app-web-6e519.firebasestorage.app",
    messagingSenderId: "365684222353",
    appId: "1:365684222353:web:d0d1037ab8be5e17861230",
    measurementId: "G-ZXVZXQ9R96"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  
