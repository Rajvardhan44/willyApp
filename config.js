import firebase from 'firebase'
require('firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyD02hbZcbXCBqCb9HPGH_sHQdzJEZ5JCtc",
    authDomain: "among-us-87265.firebaseapp.com",
    projectId: "among-us-87265",
    storageBucket: "among-us-87265.appspot.com",
    messagingSenderId: "1047770973620",
    appId: "1:1047770973620:web:e7ac3f427ff3e3a33f1ee1"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  
  }
  export default firebase.firestore()