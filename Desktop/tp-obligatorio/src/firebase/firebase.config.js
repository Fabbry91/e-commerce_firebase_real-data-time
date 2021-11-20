import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA0ZEDzjIGSwTUEPbNMgTDdn22RKAxfBDE",
    authDomain: "react-ecommerces.firebaseapp.com",
    projectId: "react-ecommerces",
    storageBucket: "react-ecommerces.appspot.com",
    messagingSenderId: "5466588993",
    appId: "1:5466588993:web:444cf9135e4bed3c4003c0",
    measurementId: "G-HXDLQHZRNJ"
};

firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider };