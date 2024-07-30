// IIFE = 
function meuEscopo() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');
    const pessoas = []
    /*form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado.');
    };
    */
function recebeEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    pessoas.push ({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    });
    console.log(pessoas);
    res.innerHTML += `${nome.value} ${sobrenome.value} pesa ${Number(peso.value)}Kg, que tem altura de ${Number(altura.value)} <br>`
};
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();