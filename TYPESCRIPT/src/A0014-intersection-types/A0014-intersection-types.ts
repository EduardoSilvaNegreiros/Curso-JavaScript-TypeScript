type HaveName = { name: string };
type HaveSurname = { surname: string };
type HaveAge = { age: number };
type Person = HaveName & HaveSurname & HaveAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const person: Person = {
  name: 'Eduardo',
  surname: 'Negreiros',
  age: 18,
};

console.log(person);

// Module mode
export { person };
