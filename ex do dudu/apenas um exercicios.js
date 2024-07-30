const form = document.querySelector('#form');
const pesoInput = document.querySelector('#peso');
const alturaInput = document.querySelector('#altura');
const butao = document.querySelector('#butao');
const res = document.querySelector('#res');

butao.addEventListener('click', function (e) {
    e.preventDefault();
    res.textContent = '';
    const pesoValor = Number(pesoInput.value);
    const alturaValor = Number(alturaInput.value);

    if (isNaN(pesoValor) || isNaN(alturaValor) || pesoInput.value.trim() === '' || alturaInput.value.trim() === '') {
        mostraErro('Digite um valor válido!');
        return
    }


    if (alturaValor >= 3.00) {
        mostraErro('Digite uma altura concisa!');
        return
    }

    if (pesoValor >= 300) {
        mostraErro('Digite um peso conciso!');
        return
    }

    const resultadoImc = calculoImc(pesoValor, alturaValor);
    const nivelImc = getLevelImc(resultadoImc);
    mostraResultado(resultadoImc, nivelImc);
});

function criaP() {
    const p = document.createElement('p');
    return p
}

function calculoImc(peso, altura) {
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        return NaN;
    }

    return (peso / (altura * altura)).toFixed(2);
}

function getLevelImc(imc) {
    const level = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];


    if (imc >= 39.9) return level[5];
    if (imc >= 34.9) return level[4];
    if (imc >= 29.9) return level[3];
    if (imc >= 24.9) return level[2];
    if (imc >= 18.5) return level[1];
    if (imc < 18.5) return level[0];
}

function mostraResultado(resultado, nivelDoImc) {
    const p = criaP();
    p.textContent = `O seu IMC é de: ${resultado} (${nivelDoImc})`;
    p.classList.add('paragrafo-resultado');
    res.appendChild(p);
}

function mostraErro(mensagem) {
    const p = criaP();
    p.textContent = `Erro: ${mensagem}`;
    p.classList.add('bad');
    res.appendChild(p);
}




