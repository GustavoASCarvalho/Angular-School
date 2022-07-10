// FINALIZADO

// Crie um mixin "named" e tipo "HasName" para adicionar as
// propriedades "firstName" e "lastName" de tipos string.
// Crie um outro mixin chamado "fullNamed" e tipo "HasFullName"
// que deverá adicionar um método "getFullName()" a um tipo qualquer que implemente "HasName"

export type Constructor<T = {}> = new (...args: any[]) => T;

export function named<TBase extends Constructor>(base: TBase) {
    return class extends base {
        firstName: string = 'Gustavo'
        lastName: string = 'Carvalho'
    }
}

const HasName = named(Node);
const hasName = new HasName()

hasName.firstName = '2';


