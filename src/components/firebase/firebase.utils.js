import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNWQa_artC7yKDQQ9HSLxenzOLIl9Hvmg",
    authDomain: "crown-shopping-2187f.firebaseapp.com",
    projectId: "crown-shopping-2187f",
    storageBucket: "crown-shopping-2187f.appspot.com",
    messagingSenderId: "635594716308",
    appId: "1:635594716308:web:acb4f489caa1f73159f081",
    measurementId: "G-NC98WJNJJT"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export const signInWithGoogle = () => {
      return auth.signInWithPopup(provider);
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShotExists = await userRef.get();
    try {
      if(!snapShotExists.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        const userSnapshot = await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
        console.log(userSnapshot);
      }
    } catch (e) {
      console.log(e);
    }
    return userRef;
  };

  export default firebase
  