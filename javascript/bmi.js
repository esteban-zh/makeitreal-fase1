
function bmi(peso, altura){
    imc = peso / (altura**2);
    return imc;
}

//var g = bmi( 80, 1.8);
//console.log("tu imc es: " + g );
console.log("tu imc es: " + bmi(80, 1.8));