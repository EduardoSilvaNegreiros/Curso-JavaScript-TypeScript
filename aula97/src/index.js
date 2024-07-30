// import { nome, sobrenome, idade, soma, Pessoa as OutraCoisa} from './modulo1';
// import * as MeuModulo from './modulo1';
// import o, { nome as n, sobrenome, idade, soma} from './modulo1';
import Pessoa, {nome, sobrenome} from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1)