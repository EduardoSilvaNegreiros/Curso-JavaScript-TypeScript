const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    


    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if(!peso || peso > 400) {
        setResult('Peso Inválido', false);
        return;
    } 
    if(!altura || altura > 3.00) {
        setResult('Altura Invalida', false);
        return;
    }
    

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc}  (${nivelImc})`;

    setResult(msg, true);
    
});


    function getNivelImc (imc) {
        const nível = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nível[5]
        if (imc >= 34.9) return nível[4]
        if (imc >= 29.9) return nível[3]
        if (imc >= 24.9) return nível[2]
        if (imc >= 18.5) return nível[1]
        if (imc < 18.5) return nível[0]
}



function getImc (peso, altura) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}


function criaP () {
    const p = document.createElement('p');
    return p;
}


function setResult(msg, isValid) {
    const res = document.querySelector('#res');
    res.innerHTML = '';
    

    const p = criaP();

    if (isValid ) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg
    res.appendChild(p);
    }

