import { Animal } from "../Basic/clases.ts";

namespace Farm {
    export class Cow extends Animal {
        breed = "Holstein";
        constructor() {
            super();
            console.log(`La vaca es de la raza ${this.breed} y su color es ${this.color}`);
        }
        sayHello() {
            console.log(`Muuuu! Soy una vaca de la raza ${this.breed} y mi color es ${this.color}`);
        }
    }
    const myCow: Cow = new Cow();
    myCow.sayHello();
}