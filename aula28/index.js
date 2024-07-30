// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';


const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP');
} else {
    console.log('Usuario comum');
}
*/

