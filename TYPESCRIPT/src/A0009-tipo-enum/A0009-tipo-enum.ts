enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

enum Colors {
  PURPLE = 'PURPLE',
  GREEN = 201,
  PINK,
}

console.log(Colors);
// console.log(Colors.RED);
// console.log(Colors[0]);

export function choseTheColor(color: Colors): void {
  console.log(Colors[color]);
}

choseTheColor(Colors.PURPLE);
