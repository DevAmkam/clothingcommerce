import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyArgh98Y4ZAOCCc2_QYQFt1zzEpfjKtjOw",
  authDomain: "clothing-ecommerce-bd.firebaseapp.com",
  projectId: "clothing-ecommerce-bd",
  storageBucket: "clothing-ecommerce-bd.appspot.com",
  messagingSenderId: "123195992505",
  appId: "1:123195992505:web:6b8b3e914118a14e47ee68",
  measurementId: "G-NC0SFQH46H"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firestore