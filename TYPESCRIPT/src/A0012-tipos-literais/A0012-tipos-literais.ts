let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100;

const person = {
  name: 'Eduardo' as const,
  surname: 'Negreiros',
};

function choseTheColor(color: 'Red' | 'Yellow ' | 'Blue'): string {
  return color;
}
console.log(choseTheColor('Blue'));

// Module Mode
export default 1;
