// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDaySemText(daySem) {
//     const daysSem = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
//     return daysSem[daySem]
// }

// function getNameMonths(numberMonth) {
//     const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
//     return months[numberMonth]
// }

// function zeroLeft(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function createDate(data) {
//     const daySem = data.getDay();
//     const numberMonth = data.getMonth();

//     const nameDay = getDaySemText(daySem);
//     const nameMonth = getNameMonths(numberMonth);
//     console.log(nameDay, nameMonth);
//     return (`${nameDay}, ${data.getDate()} de ${nameMonth} ` +
//         `de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
//     )
// }

// h1.innerHTML = createDate(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });



