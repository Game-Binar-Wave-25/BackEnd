// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ81J_PAo-cw6aMiq6dBeM9Mh9kA-4he0",
    authDomain: "challengechapter9-5eafa.firebaseapp.com",
    databaseURL: "https://challengechapter9-5eafa-default-rtdb.firebaseio.com",
    projectId: "challengechapter9-5eafa",
    storageBucket: "challengechapter9-5eafa.appspot.com",
    messagingSenderId: "453612462396",
    appId: "1:453612462396:web:786fbf2c51082c9a313e39",
    measurementId: "G-6FMNXTHC67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const storage = getStorage(app);
// const analytics = getAnalytics(app);

export {
    database,
    // storage
}