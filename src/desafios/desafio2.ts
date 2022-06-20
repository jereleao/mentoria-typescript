// Como podemos melhorar o esse código usando TS?
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
enum Role {
  Atriz,
  Padeiro,
}

interface IPerson {
  nome: string;
  idade: number;
  profissao: Role;
}
//Solution1
let pessoa1: IPerson = {
  nome: 'maria',
  idade: 29,
  profissao: Role.Atriz,
};

let pessoa2: IPerson = {
  nome: 'roberto',
  idade: 19,
  profissao: Role.Padeiro,
};

let pessoa3: IPerson = {
  nome: 'laura',
  idade: 32,
  profissao: Role.Atriz,
};

let pessoa4: IPerson = {
  nome: 'carlos',
  idade: 19,
  profissao: Role.Padeiro,
};

//Solution2

function ConstructPerson(
  nome: string,
  idade: number,
  profissao: Role
): IPerson {
  return {
    nome,
    idade,
    profissao,
  };
}

let functionPerson1 = ConstructPerson('maria', 29, Role.Atriz);
let functionPerson2 = ConstructPerson('roberto', 19, Role.Padeiro);
let functionPerson3 = ConstructPerson('laura', 32, Role.Atriz);
let functionPerson4 = ConstructPerson('carlos', 19, Role.Padeiro);

//Solution3
class Person implements IPerson {
  public nome: string;
  public idade: number;
  public profissao: Role;

  constructor(nome: string, idade: number, profissao: Role) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}

let classPerson1 = new Person('maria', 10, Role.Padeiro);
let classPerson2 = new Person('roberto', 10, Role.Padeiro);
let classPerson3 = new Person('laura', 10, Role.Padeiro);
let classPerson4 = new Person('carlos', 10, Role.Padeiro);
