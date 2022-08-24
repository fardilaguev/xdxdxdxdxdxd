"use strict";//directiva que indica que estamos trabajando en modo estricto
/**
 * comentarios de bloque

//Declaración de variables o contenedores
var variable1 = 10; //Caracter global
let variable2 = 23; //de ámbito local
const constante1 =3.14; // declarar constantes

if (true) {
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable1);
}

console.log(variable1);*/

//Realizar un programa que lea 2 números y los sume e imprimir resultado

let num1;
let num2;
num1 = prompt("Introduzca un número: ");
num2 = prompt("Introduzca otro número: ");
let suma =0;
suma = parseInt(num1) + parseFloat(num2);
console.log("El resultado de la suma es: "+suma);
alert("La suma es: "+suma);


