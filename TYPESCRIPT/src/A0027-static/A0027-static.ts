export class Person {
  static ageStandard = 0;
  static cpfStandard = '000.000.000-00';

  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Person.ageStandard, Person.cpfStandard);
  }

  // Factory Method
  static createPerson(name: string, surname: string): Person {
    return new Person(name, surname, Person.ageStandard, Person.cpfStandard);
  }
}

const person1 = new Person('Eduardo', 'Negreiros', 18, '494.105.328-17');
const person2 = Person.createPerson('Syang', 'Sousa');

console.log(person1);
console.log(person2);
person1.normalMethod();
console.log(Person.ageStandard, Person.cpfStandard);
