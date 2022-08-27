import admin from 'firebase-admin';
import type {
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  QueryDocumentSnapshot,
} from 'firebase-admin/firestore';
import serviceAccount from '@config/serviceAccountKey';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.DATABASE_URL,
    });
  } catch (error) {
    console.log('Sorry, our website is experiencing some issues. Please try again', error);
  }
}

const firebaseDB = admin.firestore();

interface Doc {
  id: string;
  [field: string]: unknown;
}

const docWithId = (doc: QueryDocumentSnapshot | DocumentSnapshot): Doc => ({
  id: doc.id,
  ...doc.data(),
});

const getDocumentItem = async (docRef: DocumentReference): Promise<Doc> =>
  docWithId(await docRef.get());

const getCollectionItems = async (collectionRef: CollectionReference): Promise<Doc[]> => {
  const collectionSnapshots = await collectionRef.limit(1000).get();
  const snapshots: Doc[] | PromiseLike<Doc[]> = [];
  collectionSnapshots.forEach(snapshot => {
    snapshots.push(docWithId(snapshot));
  });
  return snapshots;
};

module.exports = {
  docWithId,
  firebase: admin,
  firebaseDB,
  getCollectionItems,
  getDocumentItem,
};
