'use strict';
let miArreglo = [];
miArreglo = [2,4,5,6,7,8,true,"78","Hola Mundo"];
miArreglo.push(56);
//miArreglo - [2,4,5,6,7,8,true,"78","Hola Mundo"];

for(let i=0;i<miArreglo.length;i++){
    console.log(miArreglo[i]);
}

//variaciones del for
for(let j of miArreglo){
    console.log(j);
}

for(let j in miArreglo){
    console.log(miArreglo[j]);
}

miArreglo.forEach((e)=>{
    console.log(e);
});

miArreglo.forEach(function(e){
    console.log(e);
});