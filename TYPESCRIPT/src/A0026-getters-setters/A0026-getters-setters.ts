export class Person {
  // Super Classe
  constructor(
    private name: string,
    private surname: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Eduardo', 'Negreiros', 18, '494.105.328-17');
// Quando usar = está utilizando o setter
person.cpf = '494.105.328-99';
console.log(person.cpf);
