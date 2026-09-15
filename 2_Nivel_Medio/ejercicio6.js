let edad =20;
let tieneEntrada =true;
let esMayorDeEdad = edad >=18;
let puedeIngresar = esMayorDeEdad && tieneEntrada;
let necesitaAcompañante =!esMayorDeEdad ||!tieneEntrada;

console.log("¿Es mayor de edad? " + esMayorDeEdad);
console.log("¿Puede ingresar? " + puedeIngresar);
console.log("¿Necesta acompañante? " +necesitaAcompañante);