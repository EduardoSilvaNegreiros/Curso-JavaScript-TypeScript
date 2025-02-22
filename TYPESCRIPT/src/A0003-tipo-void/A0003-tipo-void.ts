// Função que não retorna nada
function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

// Ponto importante: metodo seria função dentro de um objeto
// Void quando não retorna nada
const person = {
  name: 'Eduardo',
  surname: 'Negreiros',

  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturn('Eduardo', 'Negreiros');
person.showName();

export { person };
