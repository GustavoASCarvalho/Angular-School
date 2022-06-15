"use strict";
// exercicio 1 
// exercicio 2
const usuario = {
    nome: "Gustavo",
    profissao: "Desenvolvedor",
    idade: 19,
    assuntosInteresses: ["ts", "js", "angular"]
};
// exercicio 3 e 4
function getAssuntosInteresses(usuario) {
    return usuario.assuntosInteresses;
}
// exercicio 5
var Materias;
(function (Materias) {
    Materias["Angular"] = "Angular";
    Materias["Typescript"] = "Typescript";
    Materias["Git"] = "Git";
})(Materias || (Materias = {}));
// exercicio 7
const nathan = {
    nome: "Nathan",
    materias: [Materias.Angular, Materias.Git]
};
const alan = {
    nome: "Alan",
    materias: [Materias.Typescript, Materias.Git, Materias.Angular]
};
// exercicio 8
const array = [nathan, alan];
// exercicio 9
function getNomesProfessores(professores) {
    return professores.map(professor => professor.nome);
}
// exercicio 10
function getMateriaisProfessores(professores) {
    // pegar todas as materias de todos os professores
    return professores.reduce((materias, professor) => {
        return materias.concat(professor.materias);
    }, []);
}
console.log(getMateriaisProfessores(array));
