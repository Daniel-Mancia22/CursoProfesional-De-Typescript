interface Person {
    name: string;
    age: number;
    code: string | number;
    descripcion?: string;
    sayHello: () => string;
}


let person: Person = {
    name: "Alice",
    age: 30,
    code: "o1",
    descripcion: "A sample person",
    sayHello: () => {
        return "Hello, my name is " + person.name;
    }
}

person.code = 50;


//crear un nuevo person
let newPerson: Person = {
    name: "Bob",
    age: 25,
    code: 100,
    descripcion: "Another sample person",
    sayHello: () => {
        return "Hello, my name is " + newPerson.name;
    }
}

//otro persona
let anotherPerson: Person = {
    name: "Charlie",
    age: 28,
    code: "c200",
    sayHello: () => "Hello, my name is"
}

//La interfaces tambien sirven para definir funciones