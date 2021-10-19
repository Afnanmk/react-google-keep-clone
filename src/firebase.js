import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyCKxanqqVZEz77b7W1f_XK9qfCg0WPnYnQ",
  authDomain: "keep-note-2.firebaseapp.com",
  projectId: "keep-note-2",
  storageBucket: "keep-note-2.appspot.com",
  messagingSenderId: "364715492570",
  appId: "1:364715492570:web:9eb98314277f7ab2ce51e3",
}

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb
