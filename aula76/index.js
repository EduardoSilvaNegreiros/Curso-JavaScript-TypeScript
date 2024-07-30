function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `Original: ${this.nome} ${this.sobrenome}`
}


Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// instância 
const pessoa1 = new Pessoa('Eduardo', 'N.');
const pessoa2 = new Pessoa('Igor', 'S.');
const data = new Date();

console.dir(pessoa1);
console.dir(data);