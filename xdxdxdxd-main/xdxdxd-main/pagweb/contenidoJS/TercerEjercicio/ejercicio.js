'use strict'

let num1;
let num2;

num1 = prompt("Introduzca un numero: ");
num2 = prompt("Introduzca un numero: ");

let suma = 0;
  if (num1 > 0 & num2 > 0){
     suma = parseFloat(num1) + parseFloat(num2);
     console.log("El resultado de la suma es: " + suma);
     alert ("la suma es: " + suma);
  }
  else{
    alert("Algún número no es positivo, intente de nuevo...")
  }