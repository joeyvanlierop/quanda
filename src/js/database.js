import firebase from "firebase/app";
import 'firebase/database';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABmLU5QQmVUEMnbgEF5GaE234fAGJpwc0",
    authDomain: "quanda-472f1.firebaseapp.com",
    databaseURL: "https://quanda-472f1.firebaseio.com",
    projectId: "quanda-472f1",
    storageBucket: "quanda-472f1.appspot.com",
    messagingSenderId: "228312315266",
    appId: "1:228312315266:web:7572d59db840ac4dd28b9b",
    measurementId: "G-9VCH294FZK"
};

// Firebase initialization
firebase.initializeApp(firebaseConfig);

// Firebase database
const database = firebase.database();

// Firebase references
const unansweredDatabase = database.ref("unanswered-questions");
const answeredDatabase = database.ref("answered-questions");

export {
    database,
    unansweredDatabase,
    answeredDatabase
};
