// const nome = 'Eduardo';
// const sobrenome = 'Negreiros';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu qro exportar';

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Eduardo';
const sobrenome = 'Negreiros';

// module.exports = {
//     nome, sobrenome, Pessoa
// };

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';