// js/app.js


// Importando SDK do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAt1yvdtjD-Vhrj_Khy6YKhHcZjkAbLfug",
  authDomain: "prestacao-contas.firebaseapp.com",
  projectId: "prestacao-contas",
  storageBucket: "prestacao-contas.appspot.com",
  messagingSenderId: "134885302449",
  appId: "1:134885302449:web:de3afac4545d5d8f2b0290"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Login com Firebase
function login(emailDigitado, senhaDigitada) {
  signInWithEmailAndPassword(auth, emailDigitado, senhaDigitada)
    .then((userCredential) => {
      const user = userCredential.user;
      // Aqui você pode diferenciar admin/usuário pelo domínio ou outro critério
      const tipo = emailDigitado.includes("admin") ? "admin" : "usuario";
      sessionStorage.setItem("usuarioLogado", JSON.stringify({ email: user.email, tipo }));
      window.location.href = tipo === "admin" ? "tela-admin.html" : "tela-usuario.html";
    })
    .catch((error) => {
      alert("Erro ao fazer login: " + error.message);
    });
}

// Listener do formulário de login
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
      login(email, senha);
    });
  }
});

function sair() {
  signOut(auth).then(() => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
  });
}

// O restante do código para carregar dados do painel será adaptado na próxima etapa
