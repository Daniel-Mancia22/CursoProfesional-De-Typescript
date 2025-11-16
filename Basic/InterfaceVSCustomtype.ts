type Person = {
    name: string;
    age: number;
}

interface Employee extends Person {
    charge: string;
}

//me pide todos los cmpos de Person y Employee
const newEmployee: Employee = {
    name: "Alice",
    age: 30,
    charge: "Software Engineer"
};


//Union tupe
type User = {
    id: string;
};

type Admin = User & Person;

const newAdmin: Admin = {
    id: "admin123",
    name: "Bob",
    age: 40
};

//En interace no se pueden crear tipos como los types

//Las interface tiene la habilidad de acoplarse entre si 

interface Develoeer {
    lenguaje: string;
    name: string;
}

interface Develoeer {
    phone: string;
}

const me: Develoeer = {
    lenguaje: "TypeScript",
    phone: "123-456-7890",
    name: "Charlie"
}; 