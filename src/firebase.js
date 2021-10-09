import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyA-a1gG7U-81GrlEOkG36n5g4QGyYjCMJQ",
  authDomain: "keep-notes-da518.firebaseapp.com",
  projectId: "keep-notes-da518",
  storageBucket: "keep-notes-da518.appspot.com",
  messagingSenderId: "545011581003",
  appId: "1:545011581003:web:7306cb38e4743e3b048dce",
}

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref()
