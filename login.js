// Declaração de variáveis que armazenam elementos do DOM
var x = document.getElementById("login"); // Elemento da seção de login
var y = document.getElementById("register"); // Elemento da seção de registro
var z = document.getElementById("btn"); // Elemento do botão para alternar entre login e registro

// Função para exibir a seção de login e ocultar a seção de registro
function login() {
  x.style.left = "27px"; // Posiciona a seção de login no lado visível da tela
  y.style.right = "-350px"; // Oculta a seção de registro fora da tela
  z.style.left = "0px"; // Move o botão de alternância para a posição de login
}

// Função para exibir a seção de registro e ocultar a seção de login
function register() {
  x.style.left = "-350px"; // Oculta a seção de login fora da tela
  y.style.right = "25px"; // Posiciona a seção de registro no lado visível da tela
  z.style.left = "175px"; // Move o botão de alternância para a posição de registro
}

// Função para alternar a visibilidade da senha no campo de login
function myLogPassword() {
  var a = document.getElementById("logPassword"); // Campo de senha de login
  var b = document.getElementById("eye"); // Ícone de olho aberto
  var c = document.getElementById("eye-slash"); // Ícone de olho fechado

  if (a.type === "password") {
    // Verifica se o campo está no modo de senha
    a.type = "text"; // Altera o campo para exibir o texto
    b.style.opacity = "0"; // Oculta o ícone de olho aberto
    c.style.opacity = "1"; // Exibe o ícone de olho fechado
  } else {
    a.type = "password"; // Altera o campo para modo de senha
    b.style.opacity = "1"; // Exibe o ícone de olho aberto
    c.style.opacity = "0"; // Oculta o ícone de olho fechado
  }
}

// Função para alternar a visibilidade da senha no campo de registro
function myRegPassword() {
  var d = document.getElementById("regPassword"); // Campo de senha de registro
  var b = document.getElementById("eye-2"); // Ícone de olho aberto
  var c = document.getElementById("eye-slash-2"); // Ícone de olho fechado

  if (d.type === "password") {
    // Verifica se o campo está no modo de senha
    d.type = "text"; // Altera o campo para exibir o texto
    b.style.opacity = "0"; // Oculta o ícone de olho aberto
    c.style.opacity = "1"; // Exibe o ícone de olho fechado
  } else {
    d.type = "password"; // Altera o campo para modo de senha
    b.style.opacity = "1"; // Exibe o ícone de olho aberto
    c.style.opacity = "0"; // Oculta o ícone de olho fechado
  }
}

// Função para alternar a visibilidade da senha no campo de confirmação de senha no registro
function myRegConfirmPassword() {
  var e = document.getElementById("regConfirmPassword"); // Campo de confirmação de senha de registro
  var f = document.getElementById("eye-3"); // Ícone de olho aberto
  var g = document.getElementById("eye-slash-3"); // Ícone de olho fechado

  if (e.type === "password") {
    // Verifica se o campo está no modo de senha
    e.type = "text"; // Altera o campo para exibir o texto
    f.style.opacity = "0"; // Exibe o ícone de olho aberto
    g.style.opacity = "1"; // Oculta o ícone de olho fechado
  } else {
    e.type = "password"; // Altera o campo para modo de senha
    f.style.opacity = "1"; // Oculta o ícone de olho aberto
    g.style.opacity = "0"; // Exibe o ícone de olho fechado
  }
}

// Função para validar o formulário de login
function validateLogin() {
  // Limpa mensagens de erro anteriores
  document.getElementById("logEmailError").textContent = "";
  document.getElementById("logPasswordError").textContent = "";

  var email = document.getElementById("logEmail").value.trim(); // Obtém o valor do campo de email
  var password = document.getElementById("logPassword").value; // Obtém o valor do campo de senha

  var isValid = true; // Inicializa a variável de validação

  // Credenciais administrativas fixas
  const adminEmail = "admin@gmail.com";
  const adminPassword = "!admin123";

  // Validação do email
  if (email === "") {
    document.getElementById("logEmailError").textContent =
      "E-mail é obrigatório."; // Exibe mensagem de erro se o email estiver vazio
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("logEmailError").textContent = "E-mail inválido."; // Exibe mensagem de erro se o email for inválido
    isValid = false;
  }

  // Validação da senha
  if (password === "") {
    document.getElementById("logPasswordError").textContent = "Senha é obrigatória."; // Exibe mensagem de erro se a senha estiver vazia
    isValid = false;
  } else if (password.length < 8) { // Mínimo de 8 caracteres
    document.getElementById('logPasswordError').textContent = 'A senha deve ter pelo menos 8 caracteres.';
    isValid = false;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) { // Verifica se contém caractere especial
    document.getElementById('logPasswordError').textContent = 'A senha deve conter pelo menos um caractere especial.';
    isValid = false;
  }

  // Exibe mensagem de sucesso se o formulário for válido
  if (isValid) {
    // Verifica se as credenciais são de administrador
    if (email === adminEmail && password === adminPassword) {
      alert("Login de administrador realizado com sucesso!");
      // Redireciona para a página de administrador ou exibe o conteúdo administrativo
      window.location.href = "index.html";
    } else {
      alert("Login realizado com sucesso!");
      window.location.href = "index.html";
    }
  }
}

// Função para validar o formulário de registro
function validateRegistration() {
  // Limpa mensagens de erro anteriores
  document.getElementById("regUsernameError").textContent = "";
  document.getElementById("regEmailError").textContent = "";
  document.getElementById("regPasswordError").textContent = "";
  document.getElementById("regConfirmPasswordError").textContent = "";

  var username = document.getElementById("regUsername").value.trim(); // Obtém o valor do campo de nome de usuário
  var email = document.getElementById("regEmail").value.trim(); // Obtém o valor do campo de email
  var password = document.getElementById("regPassword").value; // Obtém o valor do campo de senha
  var confirmPassword = document.getElementById("regConfirmPassword").value; // Obtém o valor do campo de confirmação de senha

  var isValid = true; // Inicializa a variável de validação

  // Validação do nome de usuário
  if (username === "") {
    document.getElementById("regUsernameError").textContent =
      "Nome do usuário é obrigatório."; // Exibe mensagem de erro se o nome de usuário estiver vazio
    isValid = false;
  }

  // Validação do email
  if (email === "") {
    document.getElementById("regEmailError").textContent =
      "E-mail é obrigatório."; // Exibe mensagem de erro se o email estiver vazio
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("regEmailError").textContent = "E-mail inválido."; // Exibe mensagem de erro se o email for inválido
    isValid = false;
  }

  // Validação da senha
  if (password === "") {
    document.getElementById("regPasswordError").textContent = "Senha é obrigatória."; // Exibe mensagem de erro se a senha estiver vazia
    isValid = false;
  } else if (password.length < 8) { // Mínimo de 8 caracteres
    document.getElementById('regPasswordError').textContent = 'A senha deve ter pelo menos 8 caracteres.';
    isValid = false;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) { // Verifica se contém caractere especial
    document.getElementById('regPasswordError').textContent = 'A senha deve conter pelo menos um caractere especial.';
    isValid = false;
  }

  // Validação da confirmação de senha
  if (confirmPassword === "") {
    document.getElementById("regConfirmPasswordError").textContent = "Confirme a senha."; // Exibe mensagem de erro se a confirmação de senha estiver vazia
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("regConfirmPasswordError").textContent =
      "As senhas não coincidem."; // Exibe mensagem de erro se as senhas não coincidirem
    isValid = false;
  }

  // Exibe mensagem de sucesso se o formulário for válido
  if (isValid) {
    alert("Cadastro realizado com sucesso!");
  }
}
