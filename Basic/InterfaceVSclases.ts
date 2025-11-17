interface Person {
    name: string;
    age: number;
    greet(): void;

}

function sumar(n1: number, n2: number): number {
    let suma: number = n1 + n2;
    return suma;
}

console.log(sumar(2, 6));

function nombresApellido(a1: string, a2: string): string {
    let nombreCompleto: string = a1 + " " + a2;
    return nombreCompleto;
}

console.log(nombresApellido("Juan", "Menjivar"));