import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDxSZ96qUW9CA9ELNUX1r3E4y9cQI8Hbvc",
  authDomain: "react-auth-eb6da.firebaseapp.com",
  databaseURL: "https://react-auth-eb6da.firebaseio.com",
  projectId: "react-auth-eb6da",
  storageBucket: "react-auth-eb6da.appspot.com",
  messagingSenderId: "130379868701",
  appId: "1:130379868701:web:1fba413580b741f66af4f4"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;