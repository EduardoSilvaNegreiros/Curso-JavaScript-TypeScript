export class Person {
  // Super Classe
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.surname;
  }
}

export class Student extends Person {
  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public room: string,
  ) {
    super(name, surname, age, cpf);
  }

  // Subclasse
  getFullName(): string {
    console.log('DOING SOMETHING BEFORE');
    const result = super.getFullName();
    return result + ' HEYYY';
  }
}

export class Customer extends Person {
  // Subclasse
  getFullName(): string {
    return 'This comes from the customer: ' + this.name + ' ' + this.surname;
  }
}

const person = new Person('Edu', 'Negreiros', 18, '494.105.328-17');
const student = new Student('Edu', 'Negreiros', 18, '494.105.328-17', '0001');
const customer = new Customer('Edu', 'Negreiros', 18, '494.105.328-17');

console.log(person.getFullName());
console.log(student.getFullName());
console.log(customer.getFullName());
console.log(student);
