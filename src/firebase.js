import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyD6A7DQMjegvCdFs4PUEQ9J9l_TuyRxy3U",
    authDomain: "smart-shopsbd.firebaseapp.com",
    projectId: "smart-shopsbd",
    storageBucket: "smart-shopsbd.appspot.com",
    messagingSenderId: "880803285241",
    appId: "1:880803285241:web:c7c8854bdf220b06153a28"
};
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

// export

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
