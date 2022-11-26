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
    apiKey: "AIzaSyCqF80FMnubuzCONwUIDksgW8Xofs-SryU",
    authDomain: "test-f1a8b.firebaseapp.com",
    databaseURL: "https://test-f1a8b-default-rtdb.firebaseio.com",
    projectId: "test-f1a8b",
    storageBucket: "test-f1a8b.appspot.com",
    messagingSenderId: "38522300791",
    appId: "1:38522300791:web:5bb8d91534d27159ded972",
    measurementId: "G-F9LXBFNEP9"
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