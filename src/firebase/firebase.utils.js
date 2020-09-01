import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDPB8lmR6-94s9M4rvQMiUf8TUCIYMKIFE",
  authDomain: "ecommerce-750d5.firebaseapp.com",
  databaseURL: "https://ecommerce-750d5.firebaseio.com",
  projectId: "ecommerce-750d5",
  storageBucket: "ecommerce-750d5.appspot.com",
  messagingSenderId: "1087093440105",
  appId: "1:1087093440105:web:abd2f8f29902e8326e2cf8",
  measurementId: "G-LT07WXDW3N"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey)

//   const batch = firestore.batch()
//   objectsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc()
//     batch.set(newDocRef, obj)
//   })

//   return await batch.commit()
// }


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


