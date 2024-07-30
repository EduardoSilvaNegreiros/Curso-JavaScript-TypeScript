/*
const tresHoras = 60 * 60 * 3 *1000; 
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
*/
//const data = new Date(2019, 3); // 0-11, ano, mes, dia, hora, minuto, segundo, milissegundo
/*
const data =  new Date(1713624352118);
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); // Mes começa do 0 até 11 
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 - Domingo 6 - Sábado
console.log(data.toString());
*/
//console.log(Date.now());


function zeroAEsquerda (num) {
    return  num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda (data.getDate());
    const mes = zeroAEsquerda (data.getMonth() + 1);
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const minuto = zeroAEsquerda (data.getMinutes());
    const segundo = zeroAEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}
const data = new Date
const dataBrasil = formataData(data);
console.log(dataBrasil);

