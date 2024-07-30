function getDaySemText() {
    let diaSemText;
    switch (diaSem) {
        case 0:
            diaSemText = 'Domingo';
            return diaSemText;
        case 1:
            diaSemText = 'Segunda';
            return diaSemText;
        case 2:
            diaSemText = 'Terça';
            return diaSemText;
        case 3:
            diaSemText = 'Quarta';
            return diaSemText;
        case 4:
            diaSemText = 'Quinta';
            return diaSemText;
        case 5:
            diaSemText = 'Sexta';
            return diaSemText;
        case 6:
            diaSemText = 'Sábado';
            return diaSemText;
        default:
            diaSemText = 'Inválido'
            return diaSemText;
    }
}

const data = new Date('1987-04-10 00:00:00');
const diaSem = data.getDay();
const diaSemText = getDaySemText(diaSem);
console.log(diaSem, diaSemText);


// if (diaSem === 0) {
//     diaSemText = 'Domingo';
// }  else if (diaSem === 1) {
//     diaSemText = 'Segunda';
// } else if (diaSem === 2) {
//     diaSemText = 'Terça';
// } else if (diaSem === 3) {
//     diaSemText = 'Quarta';
// } else if (diaSem === 4) {
//     diaSemText = 'Quinta';
// } else if (diaSem === 5) {
//     diaSemText = 'Sexta';
// } else if (diaSem === 6) {
//     diaSemText = 'Sábado';
// } else {
//     diaSem = ('Dia Invalido');
// }

// console.log(diaSem, diaSemText);