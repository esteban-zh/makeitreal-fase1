
var str = "hola mundo";

for (i = 0; i < str.length; i++){
    console.log(str[i]);
}

function countingEs(str){
    var count = 0;

    for( j=0; j< str.length; j++){
        if( str[j] === "e"){
            count +=1;
        }
    }
    return count;
}

console.log(countingEs("Estoy ejercitándome los miércoles y jueves"));

function message(array){
    return array.join(" ");
}

console.log(message(["Estoy", "aprendiendo", "Java", "Script"]));

function pasword(string){

    var pasw = ''; 
    for ( w = 0; w < string.length; w++){
        var char = string[w].toLowerCase();
        
        if(char===" "){
            char="";
        } else if ( char==="a"){
            char= "4";
        }else if ( char==="e"){
            char= "3";
        }else if ( char==="i"){
            char= "1";
        }else if ( char==="o"){
            char= "0";
        }

        pasw += char;
    }
    return pasw;
}

console.log(pasword("Hola"));


function capitalize(string) {
  var words = string.split(' ');

  for(var z = 0; z < words.length; z++) {
    var chars = words[z].split('');

    chars[0] = chars[0].toUpperCase();

    words[z] = chars.join('');
  }

  return words.join(' ');
}

console.log(capitalize("pedro perez"));