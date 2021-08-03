// Código del cuadrado
console.groupCollapsed("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrada + " cm^2");
console.groupEnd();

// Código del triángulo
console.groupCollapsed("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: "
// + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, "
// + baseTriangulo + " cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

// Código del círculo
console.groupCollapsed("Círculos");

// Radio
// const radio = 4;
// console.log("El radio del círculo es: " + radio + " cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro de tu cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área de tu cuadrado es: " + area + " cm^2");
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTrianguloA");
    const valueA = parseInt(input.value);
    const input1 = document.getElementById("InputTrianguloB");
    const valueB = parseInt(input1.value);
    const input2 = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(input2.value);
    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert("El perímetro de tu triángulo es: " + perimetro + " cm");
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTrianguloBase");
    const valueBase = input.value;
    const input1 = document.getElementById("InputTrianguloAltura");
    const valueAltura = input1.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert("El área de tu triángulo es: " + area + " cm^2");
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perímetro de tu círculo es: " + perimetro + " cm");
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El área de tu círculo es: " + area + " cm^2");
}