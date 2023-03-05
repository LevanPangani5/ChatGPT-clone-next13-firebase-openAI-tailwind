import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD5_lHZoD1AZxzY4y2zQdi35MCpMNKOSWw",
  authDomain: "chatgpt-messenger-clone-4b216.firebaseapp.com",
  projectId: "chatgpt-messenger-clone-4b216",
  storageBucket: "chatgpt-messenger-clone-4b216.appspot.com",
  messagingSenderId: "737168053472",
  appId: "1:737168053472:web:f6deb0bad366ea65c8ec85"
};

// Initialize Firebase singleton pattern
const app = getApps().length ? getApp():initializeApp(firebaseConfig)
const db=getFirestore(app)

export{ db }