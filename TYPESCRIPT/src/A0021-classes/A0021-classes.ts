export class Enterprise {
  // Propriedades e construtor
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  // Métodos
  public addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  public showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
}

export class Collaborator {
  // Construtor
  constructor(
    public readonly name: string,
    public readonly surname: string,
  ) {}
}

// Criando instâncias e adicionando colaboradores
const enterprise1 = new Enterprise('Udemy', '11.111.111/0001-11');
const collaborator1 = new Collaborator('Edu', 'Negreiros');
const collaborator2 = new Collaborator('Luiz', 'Otávio');
const collaborator3 = new Collaborator('Syang', 'Sousa');

enterprise1.addCollaborator(collaborator1);
enterprise1.addCollaborator(collaborator2);
enterprise1.addCollaborator(collaborator3);

// Exibindo informações
console.log(enterprise1);
enterprise1.showCollaborators();
