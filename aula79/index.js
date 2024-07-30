// 705.484.450-52
// 11 - (total % 11) = ? (Primeiro Digito) Não pode ser maior que nove

// 7x 0x 5x 4x 8x 4x 4x 5x 0x Primeiro Digito(x)


function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}


ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia ()) return false;


    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);


    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : String(digito);
}; 

ValidaCpf.prototype.isSequencia = function() {
    const sequencia =  this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}


const cpf = new ValidaCpf('111.111.111-11');
console.log(cpf.valida());