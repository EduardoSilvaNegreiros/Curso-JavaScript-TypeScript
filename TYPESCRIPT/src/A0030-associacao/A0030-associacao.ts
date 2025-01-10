export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  toWrite(): void {
    if (this.tool === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.tool.toWrite();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract toWrite(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  toWrite(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class TypeWriter extends Tool {
  toWrite(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const writer = new Writer('Edu');
const pen = new Pen('Bic');
const typewriter = new TypeWriter('Máquina');

console.log(writer.name);
console.log(pen.name);
console.log(typewriter.name);

writer.tool = pen;
writer.tool = pen;
writer.tool = null;
writer.toWrite();
