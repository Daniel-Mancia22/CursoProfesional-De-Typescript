class Animal {
    name = "Gato";
    private age = 10;
    protected color = "Blanco";

    constructor() { }

    sayHello() {
        console.log("Hola");
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHello();

//Herencia
class Dog extends Animal {
    type = "Mamifero";

    constructor() {
        super();
        console.log(this.color);
    }

    sayHello() {
        console.log(`Hola soy un ${this.type}, mi color es ${this.color}`);
    }
}

const myDog: Dog = new Dog();
myDog.sayHello();

//public: default, se puede acceder desde cualquier parte
//private: solo se puede acceder desde la clase donde se definio
//protected: se puede acceder desde la clase donde se definio y desde las clases que heredan

export { Animal, Dog as BasicClass };