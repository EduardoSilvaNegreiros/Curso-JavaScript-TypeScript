// Factory Function (Função Fábrica)
// Constructor Function (Função Construtora)
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,

        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift(' ');
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre: JavaScript') {
            return `${this.nome} está ${assunto}.`;
        },

        peso: peso,

        altura: altura,

        // Se comporta como um atributo agr por conta do get, não mais como uma function, se chama getter 

        get imc() {
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Eduardo', 'Negreiros', 78, 1.75);
const p2 = criaPessoa('Igor', 'Negreiros', 100, 1.75);
const p3 = criaPessoa('Inês', 'Negreiros', 58, 1.65);
console.log(p3.nomeCompleto);
console.log(p2.imc);
console.log(p1.imc);




