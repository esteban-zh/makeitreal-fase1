//++++++ imprime el arreglo +++++++++
var array = ["simon", "natalia", "nayib", "diana", "german"];

for ( var i = 0; i <= array.length-1; i++){
    console.log(array[i]);
}

// //+++++++++ accediendo al elemento correcto ++++++++++
var nums = [1, 2, 3, 4, 5];

console.log(nums[1]);
console.log(nums[3]);

// // ++++++++++ agregando un ultimo elemento ++++++++++++

var secuence = ["primero", "segundo", "tercero", "cuarto"];

secuence.push("soy el ultimo elemento");

for ( var w = 0; w < secuence.length; w++){
    console.log(secuence[w]);
}

// //+++++++++++ corrigiendo posiciones +++++++++++++++++

// var secu = ["primero", "segundo", "tercero", "cuarto"];

// secu.push("soy el ultimo elemento");

// var newArray = ["quinto", "sexto"];
// var element1 = newArray[0];
// var element2 = newArray[1];
// secu.splice(4, 0, element1, element2);

// for ( var k = 0; k < secu.length; k++){
//     console.log(secu[k]);
// }

//++++corrigiendo posiciones mas optimo ++++++++++++

// var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
// var newArray = ["Quinto", "Sexto"];
// var i = 0;
// var elem = arr.splice(4, 1)[0];

// newArray.push(elem);

// console.log(newArray);

// for (i = 0; i < newArray.length; i++) {
//   arr.push(newArray[i]);
// }

// for (i = 0; i < arr.length; i++ ) {
//   console.log(arr[i]);
// }

//+++++++++++++ mayores de edad ++++++++++++++++++
var ages = [12, 3, 5, 44, 18, 2, 55, 26];

for ( z = 0; z < ages.length; z++){
    if(ages[z] >= 18){
       console.log(ages[z]);
    }   
}
 