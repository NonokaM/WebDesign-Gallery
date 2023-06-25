import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4XIXreoMzhvLs0iO6xXBcsysvCIKNvBY",
  authDomain: "webdesign-gallery.firebaseapp.com",
  projectId: "webdesign-gallery",
  storageBucket: "webdesign-gallery.appspot.com",
  messagingSenderId: "279234049472",
  appId: "1:279234049472:web:1e5577aa6db416d2670425"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
