// Helpers (o Utils)
/* Así se le llama dentro de la programación a las funciones que
    no son parte de la lógica del negocio o del ánalisis que vamos
    a hacer pero las necesitamos para nuestros calculos */
function esPar(numerito) {
    /*if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
        Es igual a que si digo */
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana general
const salariosMex = mexico.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

// Mediana del top 10%
const spliceStart = (salariosMexSorted.length * (100 - 10)) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount
);
/* Splice es un metodo que recibe 2 argumentos, el primero indica el
    inicio del corte y el segundo indica el número de posiciones que
    van a estar dentro del corte */
// Ejemplo si tuviera [0,1,2,3,4,5] y el splice (2, 2) el resultado
// sería [3,4] del corte realizado con el metodo splice();

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log({
    medianaGeneralMex,
    medianaTop10Mex
});