// Tuple
const dataCustomer1: readonly [number, string] = [1, 'Edu']; // Em python é imutavel, mas para ficar imutavel aqui precisa usar readonly
const dataCustomer2: [number, string, string] = [1, 'Edu', 'Negreiros'];
const dataCustomer3: [number, string, string?] = [1, 'Edu']; // Tem valor opcional
const dataCustomer4: [number, string, ...string[]] = [1, 'Edu', 'Negreiros']; // Tem valor opcional

// dataCustomer1[0] = 100;
// dataCustomer1[1] = 'Carlos';

console.log(dataCustomer1);
console.log(dataCustomer2);
console.log(dataCustomer3);
console.log(dataCustomer4);

// Readonly array
const array1: readonly string[] = ['Edu', 'Silva'];
const array2: ReadonlyArray<string> = ['Edu', 'Negreiros'];

console.log(array1);
console.log(array2);
