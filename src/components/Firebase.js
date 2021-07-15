import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/analytics';


// cscomp3340uwindsor@gmail.com
// csecoshopper@3340


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASrA1Q7burTpmELrLzx-d_zk87ONeeoDQ",
    authDomain: "ecoshopper-f3318.firebaseapp.com",
    projectId: "ecoshopper-f3318",
    storageBucket: "ecoshopper-f3318.appspot.com",
    messagingSenderId: "1049661279117",
    appId: "1:1049661279117:web:35743b774f2fc404e98bc4",
    measurementId: "G-3TKK0GJCWY"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;