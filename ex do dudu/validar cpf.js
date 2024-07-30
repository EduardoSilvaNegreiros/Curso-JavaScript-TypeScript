class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }


    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.gerarDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.gerarDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }


    static gerarDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
    }

    ehSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }


    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.ehSequencia()) return false;

        return this.novoCpf === this.cpfLimpo;
    }

}

const cpf = new ValidaCpf('070.987.720-03');

if (cpf.valida()) {
    console.log('Cpf Válido');
} else {
    console.log('Cpf Inválido');
}