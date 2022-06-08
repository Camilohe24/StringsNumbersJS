const producto1 = "     Monitor Asus TUF 32 pulgadas          ";

console.log(producto1)
console.log(producto1.length)

// Eliminar espacios al inicio.

console.log(producto1.trimStart())

// Eliminar espacios al final.

console.log(producto1.trimEnd())

// En JS yo puedo concatenar varios metodos, simplemente uno después de otro

console.log(producto1.trimStart().trimEnd())

// Hay un metodo que vino en ES&, que hce lo mismo que los otros dos juntos.

console.log(producto1.trim())







