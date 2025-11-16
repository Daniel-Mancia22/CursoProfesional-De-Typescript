type Perso = {
    name: string;
    age: number;
    city: string;
    code: number | string;
    description?: string;
}

const perso1: Perso = {
    name: "Alice",
    age: 30,
    city: "New York",
    code: 1001
};

type ServiceResponse = string | number | boolean | undefined | null;

type UserChanges = "admin" | "editor" | "viewer";

let changeUser: UserChanges;

const myUserChange = changeUser = "editor";