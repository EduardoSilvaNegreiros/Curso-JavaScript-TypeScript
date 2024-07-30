// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {

    const sobrenome = 'Negreiros';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }
    function falaNome() {
        console.log(criaNome('Eduardo'));
    }

    falaNome();
    idade = `Sua idade é ${idade},`;
    peso = `Você pesa ${peso},`;
    altura = `Que tem a altura de ${altura}cm.`;
    console.log(idade, peso, altura);
})(18, 78, 1.75);




