// Código del cuadrado
console.group("Cuadrados");
    // Nos sirve para agrupar mensajes que arroja la consola

// console.groupCollapsed("V2");
    // Nos sirve igual que el console de la linea 2, solo que este
    // muestras el grupo colapsado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrada + " cm^2");
    console.groupEnd();
// Nos sirve para decir que vamos a cerrar un grupo de lineas en la consola

// Código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: "
+ ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, "
+ baseTriangulo + " cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

// PI
// const PI = 3.1415;      // Una forma de guardar PI
const PI = Math.PI
    // Otra forma de obtener el resultado de PI
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + " cm^2");


console.groupEnd();