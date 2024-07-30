function mostraHora() {
    let data = new Date();


    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const atualizaHora = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(atualizaHora);
}, 3000);

setTimeout(function () {
    console.log('Ola Mundo!');
}, 5000);