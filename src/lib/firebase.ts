import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  type QueryDocumentSnapshot,
  type DocumentSnapshot,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseId: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};
const app = initializeApp(firebaseConfig);

const firebaseDB = getFirestore(app);

interface Doc {
  id: string;
  [field: string]: unknown;
}

const docWithId = (doc: QueryDocumentSnapshot | DocumentSnapshot): Doc => ({
  id: doc.id,
  ...doc.data(),
});

const getCollectionItems = async (collectionName: string): Promise<Doc[]> => {
  const coll = collection(firebaseDB, collectionName);
  const snapshot = await getDocs(coll);
  return snapshot.docs.map(doc => docWithId(doc));
};

module.exports = {
  docWithId,
  firebaseDB,
  getCollectionItems,
};
