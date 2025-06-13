// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmZwGrGew1lvYgcnAEAKRhur0OdiELcMA",
  authDomain: "prestcontas-b0c7e.firebaseapp.com",
  projectId: "prestcontas-b0c7e",
  storageBucket: "prestcontas-b0c7e.firebasestorage.app",
  messagingSenderId: "33982557339",
  appId: "1:33982557339:web:1ba1ba4d36be1d8a6eaa3e",
  measurementId: "G-VSXCELDH2N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Função para criar conta
async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

// Função para login
async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

// Função para logout
async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}

// Função para reset de senha
async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
}

export { app, analytics, auth, registerUser, loginUser, logoutUser, resetPassword };
