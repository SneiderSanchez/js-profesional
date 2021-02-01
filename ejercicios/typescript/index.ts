// Boolean
let muted: boolean = true;
muted = false;

// numbers
const age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// string
let nombre: string = "Sneider";
let saludo = `My name is ${nombre}`;

// Arrays
let people: string[] = [];
people = ["Anya", "Kiara", "Elsa"];
// people.push(9);

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Lily");
peopleAndNumbers.push(123);

// Enum

enum Color {
  red = "Red",
  green = "Green",
  blue = "Blue",
  yellow = "Yellow",
}

const favoriteColor: Color = Color.yellow;

console.log(`My favorite color is  ${favoriteColor}`);

// Any

let comodin: any = "Joker";

comodin = { type: "hola" };

// Object
let someObject: object = {};
