// exercicio 1 

type Usuario =  {
    nome: string;
    profissao: string;
    idade: number;
    assuntosInteresses: string[];
}

// exercicio 2

const usuario = {
    nome: "Gustavo",
    profissao: "Desenvolvedor",
    idade: 19,
    assuntosInteresses: ["ts", "js", "angular"]
} as Usuario;

// exercicio 3 e 4

function getAssuntosInteresses(usuario: Usuario): string[] {
    return usuario.assuntosInteresses;
}

// exercicio 5

enum Materias {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
}

// exercicio 6

type Professores = {
    nome: string;
    materias: Materias[];
}

// exercicio 7

const nathan = {
    nome: "Nathan",
    materias: [Materias.Angular, Materias.Git]
} as Professores;

const alan = {
    nome: "Alan",
    materias: [Materias.Typescript, Materias.Git, Materias.Angular]
} as Professores;

// exercicio 8

const array = [nathan, alan];

// exercicio 9

function getNomesProfessores(professores: Professores[]): string[] {
    return professores.map(professor => professor.nome);
}

// exercicio 10

function getMateriaisProfessores(professores: Professores[]): Materias[] {
    // pegar todas as materias de todos os professores
    return professores.reduce((materias, professor) => {
        return materias.concat(professor.materias);
    }, [] as Materias[]);
}

function getPrimeiroProfessorQueEnsinaAngular(professor: Professores[]): Professores | undefined {
    return professor.find(professor => professor.materias.includes(Materias.Angular));
}