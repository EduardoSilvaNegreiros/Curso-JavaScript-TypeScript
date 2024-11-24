function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}



const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),

];


function baixarPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixarPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log("Erro", e));


baixarPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERRO', e));






// Promise.race(promises)
//     .then(valor => console.log(valor))
//     .catch(erro => console.log(erro));


// Promise.all(promises)
//     .then(valor => console.log(valor))
//     .catch(erro => console.log(erro));