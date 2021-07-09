import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyBv1rjfTnJ_nUUztRYqswT8kLB9wyBb6zQ",
  authDomain: "smartshopmern.firebaseapp.com",
  projectId: "smartshopmern",
  storageBucket: "smartshopmern.appspot.com",
  messagingSenderId: "1023041949745",
  appId: "1:1023041949745:web:2d9488cef6435fe7f6c510"
};
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

// export

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()