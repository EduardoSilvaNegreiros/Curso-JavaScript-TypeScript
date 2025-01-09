export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

// Usar call para referenciar quem é o this da função!
funcao.call(new Date(), 'Edu', 19);

// Usar apply tambem para referenciar quem é o this da função!
funcao.apply(new Date(), ['Edu', 19]);
