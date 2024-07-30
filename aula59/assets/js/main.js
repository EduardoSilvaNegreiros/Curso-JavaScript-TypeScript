// function criaCalculadora() {
//     return {

//         display: document.querySelector('.display'),

//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', event => {
//                 if (event.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             });
//         },

//         realizaConta() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if (!conta) {
//                     alert('Conta Inválida');
//                     return;
//                 }

//                 this.display.value = String(conta);
//             } catch (event) {
//                 alert('Conta Inválida');
//                 return
//             }
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         del() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         cliqueBotoes() {
//             document.addEventListener('click', event => {
//                 const el = event.target;
//                 console.log(this);
//                 if (el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if (el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if (el.classList.contains('btn-del')) {
//                     this.apagaUm();
//                 }

//                 if (el.classList.contains('btn-eq')) {
//                     this.realizaConta();
//                 }

//                 this.display.focus();
//             });
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         }

//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

// #################################################

function Calculadora() {
    this.display = document.querySelector('.display');

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', event => {
            if (event.keyCode === 13) this.realizaConta();
        });
    };

    this.pressionaDeletar = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) this.del();
        })
    }

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta Inválida');
                return;
            }

            this.display.value = String(conta);
        } catch (event) {
            alert('Conta Inválida');
            return;
        }
    };


    this.clearDisplay = () => this.display.value = '';


    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay(el);
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
            this.display.focus();
        });
    };

    this.btnParaDisplay = el => this.display.value += el.innerText;

    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
        this.pressionaDeletar();
    };
}


const calculadora = new Calculadora();
calculadora.inicia();

