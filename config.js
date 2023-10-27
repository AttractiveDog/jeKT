import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyDAI-5sFf-GIoJxD0_tf3pdnJty1F7VRLw",
    authDomain: "jekt-7a4f2.firebaseapp.com",
    projectId: "jekt-7a4f2",
    storageBucket: "jekt-7a4f2.appspot.com",
    messagingSenderId: "817053990784",
    appId: "1:817053990784:web:fda00b05059a340d8f4b65",
    measurementId: "G-P3DCPTTBGZ"

};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

