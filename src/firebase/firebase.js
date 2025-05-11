import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3OkNgReWM1bbrwBkcu-S6byoT8iEUjXY",
  authDomain: "bewakoof-7eba0.firebaseapp.com",
  projectId: "bewakoof-7eba0",
  storageBucket: "bewakoof-7eba0.firebasestorage.app",
  messagingSenderId: "328901737992",
  appId: "1:328901737992:web:d3432f36da85b3b8e71bbd",
  measurementId: "G-3QK1YCJC7P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
