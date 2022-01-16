function esPar(numero) {
    return (numero % 2 === 0);
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad = (lista[mitad] + lista[mitad - 1]) / 2;
        return personaMitad;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted);

const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;

const salariiosTop10 = salarioColSorted.splice(spliceStart, spliceCount);


const medianaTop10Col = medianaSalarios(salariiosTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});