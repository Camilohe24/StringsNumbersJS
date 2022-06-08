// El objeto MATH forma parte de la ventana o el entorno global de JS, tiene muchas operaciones incluidas y utiles.
//Si no eres matematico o ingeniero, te pareceran extrañas

let resultado;

//Pi

resultado=Math.PI
console.log(resultado)

//Redondeo
resultado=Math.round(2.2);
console.log(resultado)

//Redondeo forzoso
resultado=Math.ceil(2.00001);
console.log(resultado)

resultado=Math.floor(2.9999999);
console.log(resultado)

//Raiz cuadrada
resultado=Math.sqrt(144);
console.log(resultado)

//Valor absoluto
resultado=Math.abs(-233);
console.log(resultado)

//Potenciación
resultado=Math.pow(2.5);
console.log(resultado)

//Maximo
resultado=Math.max(4,1,25,17,-3,15,37,18);
console.log(resultado)

//Minimo
resultado=Math.min(4,1,25,17,-3,15,37,18);
console.log(resultado)

//Aleatorio
resultado=Math.random();
console.log(resultado)
resultado=Math.floor(Math.random()*100);
console.log(resultado)


