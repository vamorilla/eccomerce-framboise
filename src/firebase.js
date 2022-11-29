import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDL5SYI5Mu4hbobU3Qcm2C7CFc2xEN8bmQ",
    authDomain: "framboiseecommerce.firebaseapp.com",
    projectId: "framboiseecommerce",
    storageBucket: "framboiseecommerce.appspot.com",
    messagingSenderId: "1084556297717",
    appId: "1:1084556297717:web:81065a3be89cf513540cbc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()
export { auth }