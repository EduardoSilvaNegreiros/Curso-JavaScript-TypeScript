export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  injury(character: Character): void {
    this.staff();
    character.loseLife(this.attack);
  }

  loseLife(forceAttack: number): void {
    this.life -= forceAttack;
    console.log(
      `${this.emoji} - ${this.name} agora tem ${this.life} de vida...`,
    );
  }

  abstract staff(): void;
}

export class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  staff(): void {
    console.log(this.emoji + 'GUERREIRAAAAAAAAAAAA AOOOOOO ATAQUE!!!');
  }
}

export class Monster extends Character {
  protected emoji = '\u{1F9DF}';

  staff(): void {
    console.log(this.emoji + 'MONSTERRRRRR!!!');
  }
}

const warrior = new Warrior('Guerreira', 100, 1000);
const monster = new Monster('Monstro', 87, 1000);

warrior.injury(monster);
warrior.injury(monster);
warrior.injury(monster);

monster.injury(warrior);
monster.injury(warrior);
