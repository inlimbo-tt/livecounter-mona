import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getDatabase, ref, onValue, set, runTransaction } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { firebaseConfig } from './firebase-config.js';
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app), auth = getAuth(app);
export const counter = ref(db, 'counter'), connected = ref(db, '.info/connected');
export { onValue, set, runTransaction, signInWithEmailAndPassword, onAuthStateChanged, signOut };
