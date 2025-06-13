const fakeUser = { email: "usuario@teste.com", senha: "1234", tipo: "usuario" };
    const fakeAdmin = { email: "admin@teste.com", senha: "admin123", tipo: "admin" };

    let saldoSistema = 0;
    let saldoUsuario = 0;

    document.getElementById("form-login").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email-login").value;
      const senha = document.getElementById("senha-login").value;

      if (email === fakeAdmin.email && senha === fakeAdmin.senha) {
        document.getElementById("tela-login").style.display = "none";
        document.getElementById("painel-admin").style.display = "block";
        document.getElementById("nome-admin").innerText = "Administrador";
        atualizarSaldos();
      } else if (email === fakeUser.email && senha === fakeUser.senha) {
        document.getElementById("tela-login").style.display = "none";
        document.getElementById("painel-usuario").style.display = "block";
        document.getElementById("nome-usuario").innerText = "Usuário Teste";
        atualizarSaldos();
      } else {
        alert("Credenciais inválidas.");
      }
    });

    document.getElementById("btn-sair").addEventListener("click", () => {
      document.getElementById("tela-login").style.display = "block";
      document.getElementById("painel-admin").style.display = "none";
      document.getElementById("painel-usuario").style.display = "none";
    });

    document.getElementById("form-saldo-inicial").addEventListener("submit", function(e) {
      e.preventDefault();
      const valor = parseFloat(document.getElementById("input-saldo-inicial").value);
      saldoSistema = valor;
      atualizarSaldos();
    });

    document.getElementById("form-pix").addEventListener("submit", function(e) {
      e.preventDefault();
      const valor = parseFloat(document.getElementById("valor-pix").value);
      if (valor <= saldoSistema) {
        saldoSistema -= valor;
        saldoUsuario += valor;
        atualizarSaldos();
      } else {
        alert("Saldo insuficiente no sistema.");
      }
    });

    document.getElementById("form-devolucao").addEventListener("submit", function(e) {
      e.preventDefault();
      const valor = parseFloat(document.getElementById("valor-devolucao").value);
      if (valor <= saldoUsuario) {
        saldoUsuario -= valor;
        saldoSistema += valor;
        atualizarSaldos();
      } else {
        alert("Você não tem esse saldo disponível.");
      }
    });

    function atualizarSaldos() {
      document.getElementById("saldo-inicial").innerText = saldoSistema.toFixed(2);
      document.getElementById("saldo-admin").innerText = saldoSistema.toFixed(2);
      document.getElementById("saldo-usuario").innerText = saldoUsuario.toFixed(2);
    }