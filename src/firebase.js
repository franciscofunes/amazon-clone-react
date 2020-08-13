import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_Tyd3SyJ_5RA4DoiIlD32f4LgpmqOvrU",
    authDomain: "clone-31d90.firebaseapp.com",
    databaseURL: "https://clone-31d90.firebaseio.com",
    projectId: "clone-31d90",
    storageBucket: "clone-31d90.appspot.com",
    messagingSenderId: "1061472110930",
    appId: "1:1061472110930:web:f73b83fcb2adc4e9b9d28b",
    measurementId: "G-LQK4QBJH79"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };