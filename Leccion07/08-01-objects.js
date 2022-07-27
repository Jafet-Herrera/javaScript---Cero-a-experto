//* -----------------60. Objetos en JavaScript --------------------------------------------
let x = 10;

console.log(x.length);

let persona = {
    nombre: 'Juan',                 //
    apellido: 'Perez',              // Propiedades del objeto
    email: 'ejemplo@correo.com',    //
    edad:  28                       //
}

persona.nombre
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.correo);
console.log(persona.edad);
console.log(persona);


//* ----------------- 62. Agregar métodos a Objetos en JavaScript --------------------------------------------

persona = {
    nombre: 'Juan',                 //
    apellido: 'Perez',              // Propiedades del objeto
    email: 'ejemplo@correo.com',    //
    edad:  28  ,                    //
    nombreCompleto: function(){     // Propiedad con referencia a una función
        return this.nombre+ " " +this.apellido;
    }
}
console.log(persona);

console.log(persona.nombreCompleto());


// *----------------- 64. Agregar métodos a Objetos en JavaScript --------------------------------------------

/*
    * Forma más común de definir un objeto.
*/

persona = {
    nombre: 'Juan',                 //
    apellido: 'Perez',              // Propiedades del objeto
    email: 'ejemplo@correo.com',    //
    edad:  28  ,                    //
    nombreCompleto: function(){     // Propiedad con referencia a una función
        return this.nombre+ " " +this.apellido;
    }
}
/*
    * fin Forma más común de definir un objeto.
*/

//* forma con new

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Chabacano 8';
persona2.tel = 5596875646;


console.log(persona2.nombre);
console.log(persona2.direccion);

//* ----------------- 65. Acceder a las propiedades de los Objetos en JavaScript --------------------------------------------

persona = {
    nombre: 'Juan',                 //
    apellido: 'Perez',              // Propiedades del objeto
    email: 'ejemplo@correo.com',    //
    edad:  28  ,                    //
    nombreCompleto: function(){     // Propiedad con referencia a una función
        return this.nombre+ " " +this.apellido;
    }
}

// forma más básica.
console.log(persona.nombre);

// forma de acceso similar a un array
console.log(persona["nombre"]); //objeto['propiedad']  (propiedad = String) 

for( propiedad in persona ){
    console.log(propiedad);
    console.log(persona[propiedad]);

}


//* ----------------- 66. Agregar/eliminar propiedades al Objetos en JavaScript --------------------------------------------

persona = {
    nombre: 'Juan',                 //
    apellido: 'Perez',              // Propiedades del objeto
    email: 'ejemplo@correo.com',    //
    edad:  28  ,                    //
    nombreCompleto: function(){     // Propiedad con referencia a una función
        return this.nombre+ " " +this.apellido;
    }
}

// Agregar   
persona.tel = 7293369509; // objeto.nombre_propiedad = valor

console.log(persona);

//eliminar

delete persona.tel;

console.log(persona);

//* ----------------- 67. formas de imprimir Objetos en JavaScript --------------------------------------------

// concatenar el valor de cada propiedad
console.log( persona.nombre + ' ' + persona.apellido );

// for in

for( propiedad in persona ){
    console.log(persona[propiedad]);
}

//mediante object.values

let personaArray = Object.values( persona );
console.log( personaArray );

// mediante json

let personaString = JSON.stringify( persona );

console.log( personaString );


//* ----------------- 68. Método get en objetos de JavaScript --------------------------------------------
// get: permite acceder a los valores de las propiedades de los objetos.
persona = {
    nombre: 'Juan',                 //
    apellido: 'Perez',              // Propiedades del objeto
    email: 'ejemplo@correo.com',    //
    edad:  28  ,                    //
    get nombreCompleto(){     // Propiedad con referencia a una función
        return this.nombre+ " " +this.apellido;
    }
}

console.log(persona.nombreCompleto);


//* ----------------- 68. Método set en objetos de JavaScript --------------------------------------------
// set: Permite modificar los valores de prpoedades de los objetos.

persona = {
    nombre: 'Juan',                 //
    apellido: 'Perez',              // Propiedades del objeto
    email: 'ejemplo@correo.com',    //
    edad:  28  ,   
    idioma : 'es',  
    get lang(){
        return this.idioma.toUpperCase();
    }, 
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },              //
    get nombreCompleto(){     // Propiedad con referencia a una función
        return this.nombre+ " " +this.apellido;
    }
}

console.log(persona.lang);

persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);
