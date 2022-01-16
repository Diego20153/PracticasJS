function calcularMediaAritmetica() {
    const lista = [100, 200, 300, 500];

    //let sumaLista = 0;
    //for (let i = 1; i < lista.length; i++) {
    //  sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    const prom = document.getElementById("Prom");
    prom.innerText = "El promedio es: " + promedioLista;


}