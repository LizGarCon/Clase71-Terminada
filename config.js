import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDVJr_ggtDFutCGXdsvwveVBjd1WcUYSis",
  authDomain: "db-c71-c72.firebaseapp.com",
  projectId: "db-c71-c72",
  storageBucket: "db-c71-c72.appspot.com",
  messagingSenderId: "889947927729",
  appId: "1:889947927729:web:c0608cd6a8725aa6eede90",
  measurementId: "G-ZE4NJEF6PS"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

// firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
