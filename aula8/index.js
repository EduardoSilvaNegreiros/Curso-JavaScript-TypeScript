const nome  = 'Eduardo';
const sobrenome = 'Negreiros';
const idade = 18;
const peso = 78;
const alturaEmM = 1.75;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2024 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu no ano de ${anoNascimento}, que pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`); // template strings
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, nasceu no ano de ' + anoNascimento + ' , que pesa ' + peso + ' kg tem ' + alturaEmM + ' de altura e seu IMC é de ' + imc);