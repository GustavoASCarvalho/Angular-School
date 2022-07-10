// FINALIZADO

// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
type GuestUser = {
    name: string;
}

type RegisteredUser = {
    name: string;
    email: string;
}

export type User = GuestUser | RegisteredUser;
