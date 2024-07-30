/*
Entre 0 - 11 - Bom dia!
Entre 12 - 17 - Boa tarde!
Entre 18 - 23 - Boa Noite!
*/
// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else if na checagem 
// Só posso ter um else na checagem 
// Podemos usar condições sem else if, utilizando apenas if e else 
/*
const hora = 50;

if (hora >= 0 && hora <= 5) {
    console.log('Vai dormir seu Vagabundo Safado!');
} else if (hora >= 6 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!');
} else if (hora >= 19 && hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('Horário não existe, informe uma hora!');
}
*/

const tenhoGrana = true;
if(tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa, eu não tenho grana');
}