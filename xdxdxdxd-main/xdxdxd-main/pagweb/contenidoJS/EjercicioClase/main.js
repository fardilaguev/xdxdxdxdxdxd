'use strict';

/**
 * Determinar la calificación de un estudiante según la siguiente escala de ponderación:
 * 0 y 2.9 la ponderación es Insuficiente.
 * 3.0 y 3.5 ponderación  es Regular.
 * 3.6 y 4.0 ponderación es Bien
 * 4.1 y 4.5 Muy Bien.
 * 4.6 y 5.0 es Excelente
 * 
 */

 let calificacion;
 let mensaje;
 mensaje ="";

 calificacion = prompt("Introduzca su calificación");

 switch (true){
     case calificacion >= 0 && calificacion <= 2.9:
        mensaje = `Insuficiente la calificación: ${calificacion}`;
        break;
    case calificacion >= 3.0 && calificacion <= 3.5:
            mensaje = `Regular la calificación: ${calificacion}`;
        break;
    case calificacion >= 3.6 && calificacion <= 4.0:
            mensaje = `Bien la calificación: ${calificacion}`;
        break;
    case calificacion >= 4.1 && calificacion <= 4.5:
            mensaje = `Muy Bien la calificación: ${calificacion}`;
        break;
    case calificacion >= 4.6 && calificacion <= 5.0:
            mensaje = `Excelente la calificación: ${calificacion}`;
            break;
    default:
        mensaje = `La calificación no puede ser procesada: ${calificacion}`;
        break;
 }
 console.log(mensaje);