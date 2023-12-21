import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3mhgqEFtWKp4byisGyDwXxry4Gbu5KBc",
  authDomain: "food-delivery-app-4c33f.firebaseapp.com",
  databaseURL: "https://food-delivery-app-4c33f-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-4c33f",
  storageBucket: "food-delivery-app-4c33f.appspot.com",
  messagingSenderId: "581018682438",
  appId: "1:581018682438:web:b217685c5048a7ad35f647",
  measurementId: "G-C1Z7TVWS0E"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
