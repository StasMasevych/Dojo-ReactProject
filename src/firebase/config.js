import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCuMuQPc-wwrd2cookZKvGmLmjyhg5MOvo",
  authDomain: "thedojoproject-ad0ee.firebaseapp.com",
  projectId: "thedojoproject-ad0ee",
  storageBucket: "thedojoproject-ad0ee.appspot.com",
  messagingSenderId: "125723264133",
  appId: "1:125723264133:web:eb58fe5006ba5627c6d5ec"
};

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init servcies
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp}
