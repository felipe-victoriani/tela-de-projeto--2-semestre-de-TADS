// Função para alternar visibilidade da senha
function myRegPassword(inputId, eyeId, eyeSlashId) {
    const passwordField = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);
    const eyeSlashIcon = document.getElementById(eyeSlashId);

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.style.opacity = '0';
        eyeSlashIcon.style.opacity = '1';
    } else {
        passwordField.type = 'password';
        eyeIcon.style.opacity = '1';
        eyeSlashIcon.style.opacity = '0';
    }
}

function validateRecovery() {
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var conpassword = document.getElementById('confirm-password').value;

    var isValid = true;

    // Validação de Email
    if (email === '') {
        document.getElementById('emailError').textContent = 'E-mail é obrigatório.';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'E-mail inválido.';
        isValid = false;
    }

    // Validação de Senha
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Senha é obrigatória.';
        isValid = false;
    } else if (password.length < 8) { // Mínimo de 8 caracteres
        document.getElementById('passwordError').textContent = 'A senha deve ter pelo menos 8 caracteres.';
        isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) { // Verifica se contém caractere especial
        document.getElementById('passwordError').textContent = 'A senha deve conter pelo menos um caractere especial.';
        isValid = false;
    }
    // Validação de Confirmação de Senha
    if (conpassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirme a senha.';
        isValid = false;
    } else if (password !== conpassword) {
        document.getElementById('confirmPasswordError').textContent = 'As senhas não coincidem.';
        isValid = false;
    }

    // Exibe mensagem de sucesso se o formulário for válido
    if (isValid) {
        alert('Senha alterada com sucesso!');
        window.location.href = "pagina-de-sucesso.html"; // Altere para a URL da sua página de sucesso
    }

    return false; // Impede o envio do formulário, retornando false
}

