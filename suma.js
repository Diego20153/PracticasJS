function sumar() {
    const N1 = document.getElementById("numero1").value;
    //const valor1 = input.value;
    //alert(valor1);
    const N2 = document.getElementById("numero2").value;
    //const valor2 = input.value;
    //alert(valor2);
    const resultado = Number(N1) + Number(N2);

    const resultS = document.getElementById("ResultS");
    resultS.innerText = "El resultado de la suma es: $" + resultado;
}