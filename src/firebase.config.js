import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBe3RMnX1hc8-bOfh9KMUJsivmnbmqdF3E',
  authDomain: 'house-marketplace-app-d170d.firebaseapp.com',
  projectId: 'house-marketplace-app-d170d',
  storageBucket: 'house-marketplace-app-d170d.appspot.com',
  messagingSenderId: '92272711324',
  appId: '1:92272711324:web:21733cd3d77ffd8c04bf59',
  measurementId: 'G-SZBY81BV49',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
