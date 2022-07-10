// FINALIZADO

// Crie um mixin "named" e tipo "HasName" para adicionar as
// propriedades "firstName" e "lastName" de tipos string.
// Crie um outro mixin chamado "fullNamed" e tipo "HasFullName"
// que deverá adicionar um método "getFullName()" a um tipo qualquer que implemente "HasName"

export type Constructor<T = {}> = new (...args: any[]) => T;

type HasName = {
    firstName: string
    lastName: string
}

export function named<TBase extends Constructor>(base: TBase) {
    return class extends base {
        firstName: string = 'Gustavo'
        lastName: string = 'Carvalho'
    }
}

export function fullNamed<TBase extends Constructor<HasName>>(base: TBase) {
    return class extends base {
        getFullNamed() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}

const HasFullName = fullNamed(named(class { }));
const hasFullName = new HasFullName()

console.log(hasFullName.getFullNamed())
