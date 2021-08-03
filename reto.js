// Código del triángulo

console.groupCollapsed("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    if (lado1 === lado2) {
        const hob = base / 2;
        const l2 = (lado1 || lado2) * (lado1 || lado2);
        const b2 = base * base;
        const h2 = l2 - b2;
        return (Math.sqrt(h2));
    } else {
        console.error("Los lados 1 y 2 no son iguales\n"
        + "Intenta con otras medidas");
        // alert("Las medidas de tu triángulo no"
        // + " generan un triángulo isoceles\n"
        // + "Intenta con otras medidas");
    }
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularAlturaTriangulo() {
    const input = document.getElementById("InputTrianguloA");
    const valueA = parseInt(input.value);
    const input1 = document.getElementById("InputTrianguloB");
    const valueB = parseInt(input1.value);
    const input2 = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(input2.value);
    const altura = perimetroTriangulo(valueA, valueB, valueBase);
    if (altura != undefined) {
        alert("La altura de tu triángulo es de: " + altura + " cm");
    }
}