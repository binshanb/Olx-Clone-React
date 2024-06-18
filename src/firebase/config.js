import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA12YnyA_ig7MniZeijM868avBJlb9Z52A",
  authDomain: "olx-clone-a945f.firebaseapp.com",
  projectId: "olx-clone-a945f",
  storageBucket: "olx-clone-a945f.appspot.com",
  messagingSenderId: "457849851044",
  appId: "1:457849851044:web:835a507471367d31786a31",
  measurementId: "G-ZGNBN9XJKZ"
};

  export default firebase.initializeApp(firebaseConfig)