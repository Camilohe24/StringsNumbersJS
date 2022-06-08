// Este metodo sirve para cambiar texto dentro del STRING.

const producto1 = 'Monitor Asus 32 Pulgadas';

console.log(producto1.replace("32","35"))

const nombreCompleto = "Camilo Hernández Echeverri";

console.log(nombreCompleto.replace("Camilo","Juan Camilo"))

// Este metodo sirve para extraer un parte de un STRING.

console.log(producto1.slice(0,10))
console.log(producto1.slice(5,10))
console.log(producto1.slice(10))
console.log(producto1.slice(3,1))

// Este metodo sirve para extraer un parte de un STRING y soluciona el error de poner un menor y después el mayor.

console.log(producto1.substring(0,10))
console.log(producto1.substring(5,10))
console.log(producto1.substring(10))
console.log(producto1.substring(3,1))

// Metodo para arrancar solo desde el primer caracter.

const nombre1 = "Camilo";
const apellido1 = "Hernández";

console.log(nombre1.charAt(0))
console.log(`${nombre1.charAt(0)}.${apellido1.charAt(0)}`)

