// FINALIZADO

export interface GuestUser {
    type: 'guest';
    name: string;
}

export interface AuthenticatedUser {
    type: 'user';
    id: string;
    name: string;
}

export type User = GuestUser | AuthenticatedUser;

// Crie uma função de type-guard que sirva para afunilar o tipo específico de User

function typeGuard(x: any): x is GuestUser {
    return x.type === 'guest';
}

function afunilamento(user: User) {
    if (typeGuard(user)) {
        console.log(user);
    } else {
        console.log(user);
    }
}