// FINALIZADO

// Faça uma função que mergeie dois objetos, retornando um tipo que é a interssecção dos dois tipos dos objetos.
// Dica - utilize type-parameters para receber os tipos dos objetos dinâmicamente e spread ou Object.assign para a fazer o merge
// na implementação da função.

interface Pessoa {
    nome: string;
}

interface Endereco {
    logradouro: string;
    numero: number;
}

const pessoa: Pessoa = { nome: 'João' };
const endereco: Endereco = { logradouro: 'Rua ABC', numero: 123 };

function mergeObjects<U, D extends Object>(objetoUm: U, objetoDois: D): U & D {
    return Object.assign(objetoUm, objetoDois);
}

const newObject = mergeObjects(pessoa, endereco); // Pessoa & Endereco