import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // for the db
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyClXUxi6tk3ULlCNKbSQj9yF-syR05kgVU',
  authDomain: 'react-bag-app.firebaseapp.com',
  projectId: 'react-bag-app',
  storageBucket: 'react-bag-app.appspot.com',
  messagingSenderId: '536626068372',
  appId: '1:536626068372:web:6fb2f5fa0e0bb8dae86d81',
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  // console.log(userAuth);
  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user ', error.message);
    }
  }
  return userRef;
};

export { firestore, createUserProfileDocument, auth };
