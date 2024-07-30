const inserirNome = (callback) => {
    let name = 'Eduardo';
    callback(name);
}

const meuNome = (name) => {
    console.log('Olá ' + name);
}

inserirNome(meuNome);