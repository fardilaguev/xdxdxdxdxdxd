'use strict';

let num1;
let num2;
num1 = 9;
num2 = "9";

if (num1 < 0){

}else if (num1 > 0){
 if ((num1 % 3 === 0) && (parseInt(num2)>0)) {
      console.log(" num1 es múltiplo de 3 y num2 > 0 ");
    }else{
        if(num1 % 2 === 0)
        console.log("num1 es múltiplo de 2")
    }
}
    //Switch
    let option;
    option = prompt("Introduzca una opción 1-4");

    switch (opcion){
        case "1":
            alert("Seleccionó la opción 1");
            break;
        case "2":
            alert("Seleccionó la opción 2");
            break;
        case "3":
            alert("Seleccionó la opción 3");
            break;
        case "4":
            alert("Seleccionó la opción 4");
            break;
        default:
            alert("Seleccionó una opción inválida");
            break;
    }
