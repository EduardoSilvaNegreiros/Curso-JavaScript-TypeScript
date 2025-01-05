type Age = number;
type Person = {
  name: string;
  age: Age;
  wage: number;
  preferredColor?: string;
};

type RgbColor = 'Red' | 'Yellow ' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type PreferredColor = RgbColor | ColorCMYK;

const person: Person = {
  age: 18,
  name: 'Eduardo',
  wage: 200_000, // 200000
};

export function setPreferredColor(
  person: Person,
  color: PreferredColor,
): Person {
  return { ...person, preferredColor: color };
}

console.log(setPreferredColor(person, 'Blue'));
console.log(person);
