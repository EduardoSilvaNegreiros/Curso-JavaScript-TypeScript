const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('num');
const res = document.getElementById('res');
numeroTitulo.innerHTML = Number(numero);
res.innerHTML += `<p>Raiz Quadrada: ${Math.sqrt(numero)}</p>`;
res.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
res.innerHTML += `<p>È NaN: ${isNaN(numero)}</p>`;
res.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
res.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
res.innerHTML += `<p>Com duas casas decimais:  ${numero.toFixed(2)}</p>`;


