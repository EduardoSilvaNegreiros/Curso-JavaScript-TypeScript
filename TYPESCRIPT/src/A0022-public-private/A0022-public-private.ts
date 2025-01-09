export class Enterprise {
  // Propriedades da classe
  // - public: acessível dentro e fora da classe, inclusive em subclasses. Se não especificado, é o padrão.
  // - private: acessível apenas dentro da própria classe.
  // - protected: acessível dentro da classe e em subclasses.
  // - readonly: impede a modificação da propriedade após a inicialização.

  readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

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

export class Collaborator {
  // Construtor da classe
  constructor(
    public readonly name: string, // Nome do colaborador (somente leitura)
    public readonly surname: string, // Sobrenome do colaborador (somente leitura)
  ) {}
}

// Criando instância da empresa
const enterprise1 = new Enterprise('Udemy', '11.111.111/0001-11');

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

// Exibindo o nome da empresa
console.log(enterprise1.name);
