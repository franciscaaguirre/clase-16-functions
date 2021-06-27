//FUNCTIONS

function funcName() {
    //Código que va a hacer algo...
}

function tresConsolas(){
    console.log('Holaaaaa');
    console.log('Holaaaaa');
    console.log('Holaaaaa');
}

tresConsolas();


//EJEMPLO DADO

function dadorandom () {

    let numero = Math.floor (Math.random() * 6) + 1;

    console.log('Dado numero' + numero);
};

for (let index = 0; index < 10; index++) {
   dadorandom(); 
}

//PARÁMETROS
function lanzarDados(cantidad) {
    for (let index = 0; index < 10; index++) {
        dadorandom(); 
     }
};

//ARGUMENTO de la funcion
// lanzarDados(20);


//JS NO VLIDA EL TIPO DE LOS PARAMETROS
// function nombre(nombre) {
//     if (typeof nombre === 'string') {
//         console.log('Tu nombre es: ${nombre}');
//     } else {
//         console.log('Esperaba un string');
//     }

// }

// nombre('Kikita');


// //FUNCTION DE MATHS

// function cuadrado(num){
//     console.log(num * num);
// }

// function sumar (a, b) {
//     console.log(a + b)
// }

// function dividir(a, b) {
//     console.log(a / b)
// }

// // cuadrado(5);
// // sumar(50, 250);
// // dividir(50, 10);

// // RETURN

// function cuadradoR(num){
//     return num * num;
// }

// function sumarR(a, b) {
//     return a + b;
// }

// function dividirR(a, b) {
//     return a / b;
// }

// let cuadradoDe5 = cuadradoR(5);
// let sumaDeNums = sumarR(50, 250);
// let dividirVar = dividirR(50, 10);

// console.log(cuadradoDe5);
// console.log(sumaDeNums);
// console.log(dividirVar);

// function retornarMuchos () {
//     return [1,51,5668]
// };

// let arr = retornarMuchos();

// console.log(arr);

// //Ejemplo funcion con multiples valores

// function cuadrados(...args){
//     let miArray = []
//     for (let index = 0; index < args.length; index++) {
//         miArray.push( args[index] * args[index]);
        
//     }
//     return miArray;
// };

// let arrayDeCuadrados = cuadrados[1, 2, 3, 5, 4, 5];
// console.log(arrayDeCuadrados);

// //APROVECHANDO EL RETURN
// //V1

// function esRojo(color) {
//     if(color.toLowerCase() == 'rojo'){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(esRojo('ROJO'));

// //V2

// function esRojo2(color) {
//     if(color.toLowerCase() == 'rojo'){
//         return true;
//     }
//         return false;
// }

// console.log(esRojo2('ROJO'));

// //V3

// function esRojo3(color) {
//     return color.toLowerCase() == 'rojo';
// }

// // console.log(esRojo3('ROJO'));

// //NOMBRAR VALORES

// let [valor1, valor2, valor3] = cuadrados(5, 4, 3);

// // console.log('Valor1:' + valor1);
// // console.log('Valor2:' + valor2);
// // console.log('Valor3:' + valor3);

// //VALIDAR PASSWORD
// //V1
// function checkPassword(password, userName) {
//     if(password.length < 8){
//         return false;
//     } else if(password.includes(' ')){
//         return false;
//     } else if (password.includes(userName)){
//         return false
//     }
//     return true;
// // }
// // let pass = 'superseguro123';
// // let userId = 'usuario123';

// // console.log(checkPassword(pass, userID));

// // let pass = 'superseguro123';
// // let userId = 'usuario123';

// let msjCheckPass = checkPassword(pass, userId)
// ? 'Ok tu password es correcto'
// : 'Tu password es incorrecta';
// // console.log(msjCheckPass)

// //V2
// // let pass = 'superseguro123';
// // let userId = 'usuario123';

// function checkPassword2(password, userName) {

//     let passwordLength = password.length < 8;
//     let passwordBlanc = !password.includes(' ');
//     let passwordHasUserName = !password.includes(userName);

//     return passwordLength && passwordBlanc && passwordHasUserName;
// }

// let msjCheckPass = checkPassword2(pass, userId)
// ? 'Ok tu password es correcto'
// : 'Tu password es incorrecta';

// console.log(msjCheckPass)


//FUNC PROMEDIO

let notasAlumno = [10,5,10]

function promedio (arr) {
    let total = 0;
    for(let num of arr){
        total += num
    }
    return total / arr.length;
}

let promedioAlumno = promedio(notasAlumno);

// console.log(`Promedio final = ${promedioAlumno.toFixed(2)}`);


//FUNCTIONS EXPRESION

// let multiplicar = function () {

// } QUE ES LO MISMO QUE LA DE ABAJO: ESTA NO SE USA.

let multiplicar = (a, b) => {
    return a * b
};

let sumar = (a, b) => {
    return a + b
};

let div = (a, b) => {
    return a / b
};

let mathOperations = [multiplicar, sumar, div];

console.log(mathOperations[0] (5, 5));

for(let fn of mathOperations){
    let resultado = fn(5, 5);
    console.log(resultado);
};




//CALLBACKS
let doMath = (a,b,cb) => {
    return cb(a, b);
};

console.log('doMath:' + doMath(5, 5, multiplicar));


let cambiarAyB = (a,b,cb) => {
    let num1 = a * a;
    let num2 = b * b;
    return cb(num1, num2);
};

console.log('cambiarAyB: ' + cambiarAyB(5, 5, sumar));


///

const multuplicarBy = (num) => {
    let numeroRecordado = num;
    return (otroNumero) => {
        return numeroRecordado * otroNumero;
    }
};

const doble = multuplicarBy(2);
const triple = multuplicarBy(3);
const cuadruple= multuplicarBy(4);

console.log(doble(20));
console.log(triple(50));
console.log(cuadruple(25));
