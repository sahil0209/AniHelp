import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBA9RDE05yBGVnIrDM0R6cW1mqjxEZ2ZHg",
	authDomain: "anihelp-86625.firebaseapp.com",
	projectId: "anihelp-86625",
	storageBucket: "anihelp-86625.appspot.com",
	messagingSenderId: "590697882278",
	appId: "1:590697882278:web:7585fa9b058d0ae4c20a67",
	measurementId: "G-P4765VHRTE",
});

export const fireDb = firebaseApp.firestore();
export const authProvider = new firebase.auth.GoogleAuthProvider();
