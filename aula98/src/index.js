import CreateCpf from './modules/createCpf';

import './assets/css/style.css';


(function() {
    const generate = new CreateCpf();
    const cpfGenerated = document.querySelector('.cpf-gerado');
    cpfGenerated.innerHTML = generate.createNewCpf();
})();