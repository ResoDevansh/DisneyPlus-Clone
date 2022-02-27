import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';



const firebaseConfig = {
    apiKey: "AIzaSyBsiJLG8Jo0EnXGUy8-wbFEUm10PCbGZsc",
    authDomain: "disneyplus-clone-3c7c7.firebaseapp.com",
    projectId: "disneyplus-clone-3c7c7",
    storageBucket: "disneyplus-clone-3c7c7.appspot.com",
    messagingSenderId: "801451663388",
    appId: "1:801451663388:web:e218706a4063540a6c3fd9"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=getStorage();

  export {auth,provider,storage};
  export default db;

