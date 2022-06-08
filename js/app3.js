// Vamos a concatenar textos en STRING

const producto1 = 'Monitor de 27\"';
const precio1 = '200USD';
const nombre1 = 'Camilo';
const apellido1 = 'Hernández';
const apellido2 = 'Echeverri';

// Primera forma - Vamos a unir textos de los STRING.

console.log(producto1.concat("En Descuento!!!"))
console.log(producto1.concat(precio1))

// Segunda forma - Vamos a unir textos de los STRING.

console.log(producto1+precio1)
console.log(producto1+"con un precio de="+precio1)
console.log("El producto: "+producto1+" tiene un precio de: "+precio1)

//ES6 trajo consigo una mejor forma de concatenar VARIABLES, con STRING, llamada Template String / literals

console.log(`El producto ${producto1} tiene un precio de: ${precio1}`) 
console.log(`Hola, Mi nombre es ${nombre1} ${apellido1} ${apellido2}`)

const nombreCompleto = `${nombre1} ${apellido1} ${apellido2}`;

console.log(`Hola: ${nombreCompleto} Bienvenido!!!`)