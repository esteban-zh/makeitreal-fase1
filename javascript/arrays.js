//+++++++++++++++ imprimiendo arreglo +++++++++
var array = [1, "pedro", true, false, "juan"];

console.log( array[0]);
console.log( array[1]);
console.log( array[2]);
console.log( array[3]);
console.log( array[4]);

// +++++++  recorriendo arreglo y cambiando elemento +++++++++++++++

array[array.length-1]="daniel";

array.splice(2,0,"armando");

for (var i = 0;  i< array.length; i++) {
    console.log(array [i]);
}

//++++++++++++ insertando elemento al final push o en cualquier parte splice ++++++++++




