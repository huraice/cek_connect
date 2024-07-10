const firebaseConfig = {
    apiKey: "AIzaSyD6IXHqc7dK7qXLc8Hg7AMctcC5u2r0T-o",
    authDomain: "alumini-app-4c93b.firebaseapp.com",
    projectId: "alumini-app-4c93b",
    storageBucket: "alumini-app-4c93b.appspot.com",
    messagingSenderId: "546053548821",
     appId: "1:546053548821:web:12af4e4c33dbed7163d71c",
     measurementId: "G-D292WKX6BS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

