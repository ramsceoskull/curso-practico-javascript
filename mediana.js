function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista1) {
    const listaOrdenada = lista1.sort((a, b) => a - b);
    const mitadLista1 = parseInt(listaOrdenada.length / 2);
    
    let mediana;
    
    if (esPar(lista1.length)) {
        const elemento1 = mitadLista1[mitadLista1 - 1];
        const elemento2 = mitadLista1[mitadLista1];
        // const promedio = calcularMediaAritmetica(listaOrdenada[elemento1, elemento2]);
        const promedio = [listaOrdenada[elemento1], listaOrdenada[elemento2]]
        calcularMediaAritmetica(promedio);
        mediana = promedio;
    } else {
        mediana = listaOrdenada[mitadLista1];
    }
    return mediana;
}