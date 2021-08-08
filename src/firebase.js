import {firebase} from '@firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzPFLXKYxZtNXOe1WLThLkvRvETsSQMKk",
  authDomain: "bankapp-fe840.firebaseapp.com",
  projectId: "bankapp-fe840",
  storageBucket: "bankapp-fe840.appspot.com",
  messagingSenderId: "675796212691",
  appId: "1:675796212691:web:c96abe5b4a46489c622d26",
  measurementId: "G-FNYG9GKBQN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// utils
const db = firebase.firestore();
const storage = firebase.storage().ref();
const auth = firebase.auth();


// collections references
const usersCollection = db.collection('users');
const securedLoansCollection = db.collection('securedLoans');
const unsecuredLoansCollection = db.collection('unsecuredLoans');
const educationLoansCollection = db.collection('educationLoans');
const personalLoansCollection = db.collection('personalLoans');
const vehicleLoansCollection = db.collection('vehicleLoans');
const homeLoansCollection = db.collection('homeLoans');
const goldLoansCollection = db.collection('goldLoans');
const loansAgainstAssetsCollection = db.collection('loansAgainstAssets');



// export utils/refs
export {
  db,
  storage,
  auth,
  usersCollection,
  securedLoansCollection,
  unsecuredLoansCollection,
  educationLoansCollection,
 personalLoansCollection,
 vehicleLoansCollection,
 homeLoansCollection,
 goldLoansCollection,
 loansAgainstAssetsCollection

}
