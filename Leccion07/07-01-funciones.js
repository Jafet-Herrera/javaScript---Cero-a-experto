/**
 * HOISTING
 * Mueve la delcararación al incio del programa para ser utilizada en cualquier parte del programa
 */
// miFuncion(4,3);


//* Declaración de la función
function miFuncion( arg_a, arg_b ){

    let suma =  arg_a + arg_b;
    return suma;

}

let resultado = miFuncion(2,3);

console.log("Resultado: " +  resultado);

// -----------------54. funciones de tipo expresión o anónimas --------------------------------------------

let x = function (arg_a, arg_b){ return arg_a + arg_b;};//* Termina con punto y coma

resultado = x(1,2); //*Así se manda a llamar
console.log(resultado);


// -----------------55. funciones SelfInvoking --------------------------------------------
//! NOtA: Esta funcoón no es reutilizable ya que no se asigna a una varible, ni se le asigna un nombre.

(
    function(arg_a , arg_b){
        console.log("Ejecutando función: " + (arg_a + arg_b));
    }
)(3,4);//*() Así se hace la llamada a la función.

//*Puede ser util cuando carga el programa ejemplo document.ready


// -----------------56. funciones como objetos --------------------------------------------

function miFuncion1( arg_a, arg_b ){
    //* arguments -> propiedad arguments que permite saber los argumentos de una función(Una función es un objeto)
    console.log(arguments.length);
    let suma =  arg_a + arg_b;
    return suma;

}

console.log(typeof miFuncion1);

var miFunctionTexto = miFuncion1.toString();
console.log(miFunctionTexto);

// let resultado1 = miFuncion1(2,3);



// -----------------57. funciones de flecha --------------------------------------------

/*
    Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

    Diferencias y limitaciones:

    No tiene sus propios enlaces a this o super y no se debe usar como métodos.
    No tiene argumentos o palabras clave new.target.
    No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
    No se puede utilizar como constructor.
    No se puede utilizar yield dentro de su cuerpo.

    * URL recurso: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

const sumarTipoFlecha = ( arg_a, arg_b ) => arg_a + arg_b;

resultado = sumarTipoFlecha(3,5);

console.log(resultado);


// -----------------58. Parametros y argumentos en funciones --------------------------------------------


/* 
    Parametros: 
       Lista de varibles que definicimos en una función .
    Argumentos:
        Valores que se pasan cuando se especifican cuando se llama a una función.
*/

function miFuncion2( param_a, param_b, param_c){ //*Parametros
    //Recuperar valor argumento definido
    console.log( arguments[0] );
    console.log( arguments[1] );
    console.log( arguments[2] );
    console.log( arguments[3] );



    let suma =  param_a + param_b + arguments[2];
    return suma;

}

//! Js permite no escificar argumentos cuando se llama aunque si se indiquen paramentros
let resultado2 = miFuncion2(2, 3 , 7);//*Argumentos
console.log(resultado2);