console.log("Hola TypeScript");

// Ejemplo de declaración de variable con tipo explícito
let Age: number = 30;

//Tipos de datos principales son: 

let nombre: string = "Juan"; // Cadena de texto
let isSenior: boolean = true; // Booleano
let altura: number = 1.75; // Número
let persona: object = {}; // Objeto

let frutas: Array<string> = ["manzana", "banana", "cereza"]; // Arreglo de cadenas
let carros: string[] = ["Toyota", "Honda", "Ford"]; // Otra forma de declarar un arreglo de cadenas

//Tipos especiales de typescript
let response: any = "Puede ser cualquier cosa"; // Tipo 'any' permite cualquier tipo de dato
response = 42; // Ahora es un número
response = true; // Ahora es un booleano    
response = [1, 2, "hola"]; // Ahora es un arreglo mixto


function saludar(): void {
    console.log("Hola a todos");
}

// Tipo unknown: Es desconocido su tipo hasta que se realice una verificación
let response2: unknown;
response2 = true;

if (response2 === true) {
    console.log("Es un booleano verdadero");
}

let response3: null; // Representa ausencia de valor
let response4: undefined; // Variable no definida




//Necesidad de que una variables sea de varis tipos
// Sirve para cuando uno espera una respuestas que puede ser de varios tipos
let response5: number | null;

//Typescript permite definir tipos personalizados( Nuestros propios tipos)

type ResponseTypeServices = string | undefined;

let response6: ResponseTypeServices;
let response7: ResponseTypeServices;

response7?.toString().concat("");


// Type assertion (Aserción de tipos)
//Castearlo a un tipo específico

let menssaje: any = "";
(menssaje as string).slice(1);

// Otra forma de hacer type assertion
(<string>menssaje).toLowerCase();

// otra forma
let mensajeUpperCase = <string>menssaje;
mensajeUpperCase.toUpperCase();