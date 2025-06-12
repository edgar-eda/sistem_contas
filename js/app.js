document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.getElementById('form-login');
  const painelUsuario = document.getElementById('painel-usuario');
  const painelAdmin = document.getElementById('painel-admin');
  const telaLogin = document.getElementById('tela-login');

  const usuariosTeste = {
    "admin@teste.com": { senha: "adm123", tipo: "admin", nome: "Administrador" },
    "usuario@teste.com": { senha: "user123", tipo: "usuario", nome: "Usuário Exemplo" }
  };

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-login').value.trim();
    const senha = document.getElementById('senha-login').value.trim();

    if (usuariosTeste[email] && usuariosTeste[email].senha === senha) {
      const usuario = usuariosTeste[email];
      telaLogin.style.display = 'none';

      if (usuario.tipo === 'admin') {
        painelAdmin.style.display = 'block';
        document.getElementById('nome-admin').textContent = usuario.nome;
      } else {
        painelUsuario.style.display = 'block';
        document.getElementById('nome-usuario').textContent = usuario.nome;
      }
    } else {
      alert('Credenciais inválidas.');
    }
  });
});
