//+++++++++++++++++++  greetings ++++++++++++++++++++++++++++

function greetings(name, lastName){
    return ("mi nombre es " + name + " y mi apellido es " + lastName);
}

console.log(greetings("nayim", "abdala"));
console.log(greetings("german", "escobar"));
console.log(greetings("simon", "hoyos"));


//++++++++++++  sumando +++++++++++++++++

function sum(num1, num2){
    return (num1+num2);
}

console.log(sum(10,20));
console.log(sum(10,10));
console.log(sum(40,60));
console.log(sum(50,200));

//++++++++++++ porque no funciona? ++++++++

function sayMyName(name) {
  return ("Tu nombre es " + name);
}

var name = "Nayib";
console.log(sayMyName(name));