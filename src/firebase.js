import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTFWEsbo8EG0QuEQ22ytgSdS3heS3A4Lc",
  authDomain: "galaxz-drive-ca372.firebaseapp.com",
  projectId: "galaxz-drive-ca372",
  storageBucket: "galaxz-drive-ca372.appspot.com",
  messagingSenderId: "927599674185",
  appId: "1:927599674185:web:1f0cc48d502cc221fd9098",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };
