export const nome = 'Luiz';
export const sobrenome = 'Negreiros';
export const idade = 18;
export const cpf = 'sasasas';

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export default (x, y) => x * y;
// export {nome, sobrenome, idade, soma}
// export { nome as nome2, sobrenome, idade, soma };