import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBJr0HC8IbO7EMJAasKIIwNKN_CterbhbM',
    authDomain: 'test-9e72d.firebaseapp.com',
    databaseURL: 'https://test-9e72d.firebaseio.com',
    projectId: 'test-9e72d',
    storageBucket: 'test-9e72d.appspot.com',
    messagingSenderId: '593396859321',
    appId: '1:593396859321:web:1da41afff930430863b668',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
export default db
