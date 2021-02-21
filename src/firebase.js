import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCK6aXyZz-VQnU0KxqZrs7SFK2DFpTG9jU',
  authDomain: 'netflix-clone-bfac1.firebaseapp.com',
  projectId: 'netflix-clone-bfac1',
  storageBucket: 'netflix-clone-bfac1.appspot.com',
  messagingSenderId: '127023383819',
  appId: '1:127023383819:web:0179cffabb0e5206d70e0e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
