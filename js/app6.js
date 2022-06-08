// Este metodo nos permite repetir texto en un STRING

const producto1 = "Chaqueta color verde XL";
const promocion1 = 'en promoción!!!'.repeat(3);

console.log(producto1.repeat(3))
console.log(producto1.repeat(2.8))
console.log(`${producto1} ${promocion1}`)

// Este metodo nos permite separar palabras por caracteres especiales.

const actividad = 'Estoy aprendiendo Js ES6';

console.log(actividad.split(" "))

const hobbies = "Programar,Cocinar,Nadar,Karate,Leer";
const arrayHobbies = hobbies.split(",");

console.table(arrayHobbies)
