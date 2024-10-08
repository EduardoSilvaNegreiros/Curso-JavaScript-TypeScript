// 070.987.720-03
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }


    gerarNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }


    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    ehSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.ehSequencia()) return false;
        this.gerarNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

if (cpf.valida()) {
    console.log('Cpf Válido');
} else {
    console.log('Cpf Inválido');
}


