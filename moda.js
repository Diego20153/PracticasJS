function Moda() {
    const lista = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

    const veces = {};

    lista.map(
        function(elemento) {
            if (veces[elemento]) {
                veces[elemento] += 1;
            } else {
                veces[elemento] = 1;
            }
        }
    );

    const ListaVeces = Object.entries(veces).sort(
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const laModa = ListaVeces[ListaVeces.length - 1];

    const deModa = document.getElementById("Moda");
    deModa.innerText = "La moda que mas se repite es : " + laModa[0] + " y se repite: " + laModa[1] + " veces";
}

function otraforma() {
    const lista = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

    function mode(lista) {
        return lista.sort((a, b) =>
            lista.filter(v => v === a).length -
            lista.filter(v => v === b).length
        ).pop();
    }
    const deModa = document.getElementById("Moda2");
    deModa.innerText = "La otra moda es: " + mode(lista);
}