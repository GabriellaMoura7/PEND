// Exercício 1
function sayHello() {
    console.log("Hello, World!");
}
sayHello();

// Exercício 2

function sum() {

    let a = 5;
    let b = 7;

    let sum = a + b;

    console.log(sum);
}
sum();

// Exercício 3
function localExample() {
    let message = "Variável local"

    console.log(message)
}
console.log(message)

// Exercício 4

function greet(name) {
    console.log("Hello, ", name , "!");
}
greet("Gabi");

// Exercício 5
function calculateArea(radius) {
    return Math.PIradiusradius;
}
console.log(calculateArea(2))

// Exercício 6

function currentDate() {
    let today = new Date();
    console.log(today);
    }
    currentDate();

// Exercício 7
var x = 10;
function shadowExample(x) {
    console.log(x);
    console.log(x);
}
console.log(shadowExample(20))

// Exercício 8
   
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("Primos:");
console.log("2:", isPrime(2));    // true
console.log("3:", isPrime(3));    // true
console.log("4:", isPrime(4));    // false
console.log("17:", isPrime(17));  // true
console.log("20:", isPrime(20));  // false

// Exercício 9
function toFahrenheit(celsius) {
    return (celsius = 5/9 ) * (f - 32);
}
function toCelsius(fahrenheit) {
    return (fahrenheit = ( c * 9/5)) + 32;
}
let f = 80.6;
let c = 27;

console.log(c + "está e a temperatura em fahrenheit" + toFahrenheit(c));
console.log(f + "esta" + toCelsius(f));

// Exercício 10

function MáximoEmArray(){

    function getMax(arr) {
        let max = 0; 
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i]; 
        }
        }
        return max; 
        }   
    const numeros = [3, 7, 2, 8, 5];
    console.log("O maior valor é:", getMax(numeros));
    
    } 

// Exercício 11

function avarage(scores) {
    let soma = 0;
  for (let i = 0; i < scores.length; i++) {
    soma += scores[i];
  }

  return soma / scores.length;
}
const numeros = [8, 7.5, 9, 10];
const media = calcularMedia(numeros);
console.log("A média dos elementos é:", media)

// Exercício 12

function fullName(firstName, lastName) {
    
    return firstName + lastName;
}
    console.log(fullName("Gabi, ", "Gustavo"));
    console.log(fullName("Khallil, ", "Rafaela"));
    console.log(fullName("Julia, ", "Isa"));

// Exercício 13

function double(n) {
    return n*2;
 
}
function quadruple(n) {
    return double(double(n));
    
}
console.log(quadruple(3));

// Exercício 14

var mode = "light";

function shadowingMedio(){
    
let mode = "light";

function toggleMode(mode) {
    let newMode = (mode === "light") ? "dark" : "light";
    console.log(newMode);
    return newMode;
}

console.log(mode);
toggleMode(mode);

}

