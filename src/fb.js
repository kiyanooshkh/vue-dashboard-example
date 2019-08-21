  import firebase from 'firebase/app';
  import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdRkE50Q7eGZIzumBmIXN_KEN34-atDG0",
    authDomain: "vue-dashboard-example.firebaseapp.com",
    databaseURL: "https://vue-dashboard-example.firebaseio.com",
    projectId: "vue-dashboard-example",
    storageBucket: "vue-dashboard-example.appspot.com",
    messagingSenderId: "695741485934",
    appId: "1:695741485934:web:404cdc1cb3fd2f2f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.settings({timestampsInSnapshots:true});

  export default db;