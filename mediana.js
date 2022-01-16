function calcularMediana() {

    const datos = [100, 200, 300, 40000000, 500, 450];
    lista = datos.sort(function(a, b) { return a - b });

    const mitad = lista.length / 2;

    if (esPar(mitad)) {
        const elemento1 = lista[mitad];
        const elemento2 = lista[mitad - 1];
        const median = (elemento1 + elemento2) / 2;
    } else {
        median = lista[mitad];
    }

    const media = document.getElementById("Media");
    media.innerText = "La mediana es: " + median;

}

function esPar(mitad) {
    return (mitad === 0);
}