const textArea = document.querySelector(".formulario");
const mensagem = document.querySelector(".mensagem-saida");
const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// Função para alterar o layout da mensagem
function alterarLayoutMensagem() {
    const saidaFormulario = document.querySelector('.saida-formulario');
    const texto = mensagem.value.trim();

    if (texto) {
        saidaFormulario.classList.add('active');
    } else {
        saidaFormulario.classList.remove('active');
    }
}

// Função Criptografar
function btnCriptografar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    alterarLayoutMensagem();
}



function encriptar(stringEncriptada) {

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Função Desencriptar
function btnDescriptografar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    alterarLayoutMensagem();
}


function desencriptar(stringDesencriptada) {

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


// Função para copiar o texto da mensagem-saida
function btnCopiar() {
    const textoCopiar = mensagem.value;

    if (!textoCopiar) {
        alert("Nada para copiar!");
        return;
    }

    navigator.clipboard.writeText(textoCopiar).then(() => {
        alert("Texto copiado!");
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}

// Adicionando o evento ao botão de copiar
document.querySelector(".btnCopiar").addEventListener("click", btnCopiar);
