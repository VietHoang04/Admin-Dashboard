import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBXSFXnQ4GThrI_b-jYH4fVCar3k-ReW10",
    authDomain: "data-fc659.firebaseapp.com",
    databaseURL: "https://data-fc659-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "data-fc659",
    storageBucket: "data-fc659.appspot.com",
    messagingSenderId: "368171015252",
    appId: "1:368171015252:web:f335946d7ce662680661c1",
    measurementId: "G-P356E32FJK"
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);