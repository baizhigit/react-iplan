import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBMzCEbCCjoJEMJos6Ts3XmdSMfWP1oXb0',
  authDomain: 'nn-iplan-8a8ab.firebaseapp.com',
  databaseURL: 'https://nn-iplan-8a8ab.firebaseio.com',
  projectId: 'nn-iplan-8a8ab',
  storageBucket: '',
  messagingSenderId: '805236110705',
  appId: '1:805236110705:web:e113035e48b229d6'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
