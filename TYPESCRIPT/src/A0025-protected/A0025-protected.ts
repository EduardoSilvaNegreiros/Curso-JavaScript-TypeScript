export class Enterprise {
  readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  // Construtor da classe
  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  // Métodos da classe

  // Adiciona um colaborador à lista
  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  // Exibe a lista de colaboradores no console
  showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Udemy extends Enterprise {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();
    if (collaborator) return collaborator;
    return null;
  }
}

export class Collaborator {
  // Construtor da classe
  constructor(
    public readonly name: string,
    public readonly surname: string,
  ) {}
}

// Criando instância da empresa
const enterprise1 = new Udemy();

// Criando colaboradores
const collaborator1 = new Collaborator('Edu', 'Negreiros');
const collaborator2 = new Collaborator('Luiz', 'Otávio');
const collaborator3 = new Collaborator('Syang', 'Sousa');

// Adicionando colaboradores à empresa
enterprise1.addCollaborator({
  name: 'Eduardo',
  surname: 'Negreiros',
});

enterprise1.addCollaborator(collaborator1);
enterprise1.addCollaborator(collaborator2);
enterprise1.addCollaborator(collaborator3);
// enterprise1.popCollaborator();

// Exibindo o nome da empresa
console.log(enterprise1);
