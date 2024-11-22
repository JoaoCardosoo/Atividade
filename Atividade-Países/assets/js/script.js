// Obter o modal
var modal = document.getElementById("imageModal");

// Obter o modal image element
var modalImage = document.getElementById("modalImage");
var captionText = document.getElementById("modalCaption");

// Obter todos os elementos de imagem da galeria
var images = document.getElementsByClassName("gallery-img");

// Adicionar evento de click para cada imagem
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(event) {
        modal.style.display = "block";
        modalImage.src = event.target.src;  // Definir a imagem no modal
        captionText.innerHTML = event.target.alt;  // Definir a legenda
    };
}

// Obter o botão de fechar
var closeBtn = document.getElementById("closeModal");

// Quando o usuário clicar no "x", feche o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Fechar o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


// Funcionalidade de mostrar/ocultar informações
function toggleInfo(index) {
    const infoText = document.querySelectorAll('.info-text')[index];
    const button = document.querySelectorAll('.info-toggle')[index];

    if (infoText.style.display === 'none' || infoText.style.display === '') {
        infoText.style.display = 'block';
        button.textContent = 'Ocultar';  // Muda o texto do botão
    } else {
        infoText.style.display = 'none';
        button.textContent = 'Saiba Mais';  // Muda o texto do botão
    }
}

// Funcionalidade do Modal
var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var captionText = document.getElementById("modalCaption");

var images = document.getElementsByClassName("gallery-img");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(event) {
        modal.style.display = "block";
        modalImage.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    };
}

var closeBtn = document.getElementById("closeModal");

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Função de validação do formulário
function validateForm() {
    let isValid = true;

    // Limpar mensagens de erro anteriores
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Validar nome
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Por favor, insira seu nome.";
        isValid = false;
    }

    // Validar e-mail
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Por favor, insira um e-mail válido.";
        isValid = false;
    }

    // Validar mensagem
    const message = document.getElementById("message").value;
    if (message.trim().length < 10) {
        document.getElementById("messageError").innerText = "A mensagem deve ter pelo menos 10 caracteres.";
        isValid = false;
    }

    return isValid;  // Se false, o formulário não será enviado
}