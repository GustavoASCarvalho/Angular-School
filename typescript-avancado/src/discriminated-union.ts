// FINALIZADO

// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
type GuestUser = {
    type: 'guest';
    name: string;
}

type RegisteredUser = {
    type: 'registered';
    name: string;
    email: string;
}

export type User = GuestUser | RegisteredUser;

function afunilamento(user: User) {
    if (user.type === 'guest') {
        console.log(user); // Guestuser
    } else if (user.type === 'registered') {
        console.log(user); // Registereduser
    }
}