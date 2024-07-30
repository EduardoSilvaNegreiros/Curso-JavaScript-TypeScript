import geraSenha from "./generators";

const passwordGenerated = document.querySelector('.generated-password');
const qtdCharacters = document.querySelector('.qtd-characters');
const chkMaiusuculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const generateOurPassword = document.querySelector('.generate-our-password');

export default () => {
    generateOurPassword.addEventListener('click', () => {
        passwordGenerated.innerHTML = generate();
    });
};

function generate() {
    const password = geraSenha(
        qtdCharacters.value,
        chkMaiusuculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return password || 'Nada selecionado.';
}