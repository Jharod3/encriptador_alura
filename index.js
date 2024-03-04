

function validateText(textoDigitado) {
    
    var regex = /^[a-z\s]+$/;
    if (!regex.test(textoDigitado)) {
        return false;
    }
    return true;
}


function Encrypt() {
    let textoDigitado = document.querySelector('.start__text').value;

    //validate the texto 
    if (textoDigitado.length === 0) {
        swal("Ooops!", "Debes ingresar un texto", "warning");
        return;
    }
    if (!validateText(textoDigitado)) {
        swal("Ooops!", "El texto solo debe contener letras minúsculas y sin acentos", "warning");
        return;
    }

    // Replacing vowels with other words
    let text__Encrypt = textoDigitado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "obter")
        .replace(/u/g, "ufat");

    // Display the result in textarea on the div result__final
    let textareaResultado = document.querySelector('.result__challenge');
    textareaResultado.value = text__Encrypt;

    // Display the div result__final
    document.querySelector('.result__final').style.display = 'block';
    
    // Hide the div result__mensage
    document.querySelector('.result__mensage').style.display = 'none';
    ClearTextArea();
}

function Decrypt() {
    let textoDigitado = document.querySelector('.start__text').value;

    //validate the texto 
    if (textoDigitado.length === 0) {
        swal("Ooops!", "Debes ingresar un texto", "warning");
        return;
    }
    if (!validateText(textoDigitado)) {
        swal("Ooops!", "El texto solo debe contener letras minúsculas y sin acentos", "warning");
        return;
    }

    // Replace words with their respective vowels
    let text__Decrypt = textoDigitado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/obter/g, "o")
        .replace(/ufat/g, "u");

    // Display the result in the div's textarea result__final
    let textareaResultado = document.querySelector('.result__challenge');
    textareaResultado.value = text__Decrypt; 

    // Display the div result__final
    document.querySelector('.result__final').style.display = 'block';
    document.querySelector('.result__mensage').style.display = 'none'; 
    ClearTextArea();  
}

function copyText() {
    // Get the element from textarea
    let textareaResultado = document.querySelector('.result__challenge');

    // Select text within the textarea
    textareaResultado.select();

    // Copy text to clipboard
    document.execCommand('copy');
    swal("Ok!", "El texto ha sido copiado al portapapeles", "success");
    ClearTextResult();
    
}

// Adicionar um ouvinte de evento ao botão
document.querySelector('.result__copy').addEventListener('click', copyText);

function ClearTextArea() {
    // Clear .start__text
    document.querySelector(".start__text").value = '';
}

function ClearTextResult() {
    // Clear .result__challenge
    document.querySelector(".result__challenge").value = '';
}