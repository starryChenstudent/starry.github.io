// Firebase initialization and Firestore export (with persistent cache and jsDelivr CDN)
// Note: this file is loaded via <script type="module"> in HTML pages

import { initializeApp } from "https://cdn.jsdelivr.net/npm/firebase@10.12.3/app/dist/index.esm.js";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  CACHE_SIZE_UNLIMITED,
  collection,
  doc
} from "https://cdn.jsdelivr.net/npm/firebase@10.12.3/firestore/dist/index.esm.js";

const firebaseConfig = {
  apiKey: "AIzaSyCD2Tlfy2UeCg_U7eS8o6j1Vbjsw66HGg4",
  authDomain: "duty-rotation-system.firebaseapp.com",
  projectId: "duty-rotation-system",
  storageBucket: "duty-rotation-system.firebasestorage.app",
  messagingSenderId: "1002421683303",
  appId: "1:1002421683303:web:c9886014ba2bcc83b600c2"
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
});

// common collection/doc helpers
const col = (name) => collection(db, name);
const ref = (pathSegments) => doc(db, ...pathSegments);

export { app, db, col, ref };

