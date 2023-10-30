
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCnOwXGsnUFs7TING7wzt12w_slNHu6nk",
    authDomain: "shop-clo.firebaseapp.com",
    projectId: "shop-clo",
    storageBucket: "shop-clo.appspot.com",
    messagingSenderId: "576501054531",
    appId: "1:576501054531:web:efc0df27c8385f0212a8f6",
    measurementId: "G-FEXVCN7BL4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth }