import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkWmMvcdcHE6A0fkCSLE_LKcYuecKJeec",
    authDomain: "clubday-lahs.firebaseapp.com",
    databaseURL: "https://clubday-lahs.firebaseio.com",
    projectId: "clubday-lahs",
    storageBucket: "clubday-lahs.appspot.com",
    messagingSenderId: "129683030350",
    appId: "1:129683030350:web:4adeb78a1d188563375e1f"
  };

firebase.initializeApp(firebaseConfig)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()

export default {
    db, 
    auth
}