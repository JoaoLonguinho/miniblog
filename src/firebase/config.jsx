
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importação do firebase - banco de dados

const firebaseConfig = {
    apiKey: "AIzaSyA4DVz1B_W-yY5i8QhYvDjUJMLg04QiBTo",
    authDomain: "miniblog-d6518.firebaseapp.com",
    projectId: "miniblog-d6518",
    storageBucket: "miniblog-d6518.firebasestorage.app",
    messagingSenderId: "853825681025",
    appId: "1:853825681025:web:d8017554b8f9a672aa7f80"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app) // chamando o banco de dados

export { db };