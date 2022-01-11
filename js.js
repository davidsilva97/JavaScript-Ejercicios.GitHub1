//Part 1 Type Converted 
// let valor1 = false;
// let valor2 = true;
// let valor3 = 0;
// let valor4 = 1;
// let valor5 = "0";
// let valor6 = "000";
// let valor7 = "1";
// let valor8 = NaN;
// let valor9 = Infinity;
// let valor10 = -Infinity;
// let valor11= "";
// let valor12 = "20";
// let valor13 = "twenty"
// let valor14 = null;
// let valor15 = undefined;

// //Convertir  a numero
// let valor1 = Number(valor1);
// let valor1 = Number(valor2);
// let valor1 = Number(valor3);
// let valor1 = Number(valor4);
// let valor1 = Number(valor5);
// let valor1 = Number(valor6);
// let valor1 = Number(valor7);
// let valor1 = Number(valor8);
// let valor1 = Number(valor9);
// let valor1 = Number(valor10);
// let valor1 = Number(valor11);
// let valor1 = Number(valor12);
// let valor1 = Number(valor13);
// let valor1 = Number(valor14);
// let valor1 = Number(valor15);

// //Convertir a string
// let valor = String(valor1);
// let valor = String(valor2);
// let valor = String(valor3);
// let valor = String(valor4);
// let valor = String(valor5);
// let valor = String(valor6);
// let valor = String(valor7);
// let valor = String(valor8);
// let valor = String(valor9);
// let valor = String(valor10);
// let valor = String(valor11);
// let valor = String(valor12);
// let valor = String(valor13);
// let valor = String(valor14);
// let valor = String(valor15);

//Part 1
// var x = false;
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// console.log(typeof(x));


// var x = true;
// console.log(x);
// var y = Number(x)
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z))

// console.log(typeof(x));


// var x = 0;
// console.log(x);
// console.log(typeof(x));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = 1;
// console.log(x);
// console.log(typeof(x));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = "0";
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = "000";
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)

// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = "1";
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = NaN;
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = Infinity;
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = -Infinity;
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = "";
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = "20";
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = null;
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));


// var x = undefined;
// console.log(x);

// var y = Number(x);
// console.log(typeof(y));

// var z = String(x)
// console.log(typeof(z));

// var x = !!"false";
// console.log(typeof(x));

//Ejercicio 2
function calculadoraEdad(){
    birth = prompt("Ingresa tu año de nacimiento: ");
    year = prompt("Ingresa el año que quieres saber tu edad: ");
    edad =  year - birth;
    mensaje = `En el año ${year} vas a tener ${edad} años.`;
    return alert(mensaje);
}
//calculadoraEdad();

//Ejerciico 3

function crearObjeto(name, location,hobbies){
    let objeto = {
        "nombre": `Hola mi nombre es ${name}`,
        "location": `,vivo en ${location}`,
        "hobbies": `,mis hobbies son ${hobbies}`
    }

    
    console.log(`${objeto.nombre} ${objeto.location} ${objeto.hobbies}`);
}

let nombre = prompt("Ingresa tu nombre: ");
let ubicacion = prompt("Ingresa tu ubicacion: ");
let pasatiempos = prompt("Ingresa tus hobbies: ");
crearObjeto(nombre,ubicacion,pasatiempos);

