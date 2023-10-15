import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBo2ug6NhjFXpqVG51z2m1JFUCC1YtR2yw",
    authDomain: "labview-1b924.firebaseapp.com",
    databaseURL: "https://labview-1b924-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "labview-1b924",
    storageBucket: "labview-1b924.appspot.com",
    messagingSenderId: "557298697198",
    appId: "1:557298697198:web:cc29c44b555ab9a5efc4ff",
    measurementId: "G-L4P95N7BBE"
};
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);