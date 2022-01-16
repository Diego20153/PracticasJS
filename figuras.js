console.group("Cuadrados");

const lado = 5;
console.log("Los lados del cuadrado miden: " + lado + " cms");

const perimetroCUA = (lado) => lado * 4;
const areaCUA = (lado) => lado * lado;

console.log("Elperimetro del cuadrado es: " + perimetroCUA(lado) + " cms");
console.log("El area del cuadrado es: " + areaCUA(lado) + " cms cuadrados");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");
const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;
console.log("Los lados del triangulo miden: " + lado1 + " cms," + lado2 + " cms y la base " + base + " cms");
console.log("La altura del triangulo es : " + altura);

const perimetroT = (lado1, lado2, base) => lado1 + lado2 + base;
const areaT = (base, altura) => (base * altura) / 2;

console.log("El perimetro del triangulo es: " + perimetroT(lado1, lado2, base) + " cms");
console.log("El area del triangulo es: " + areaT(base, altura) + " cms cuadrados");

console.groupEnd();

//Ciculos
console.group("Circulos");
const radio = 4;

const perimetroC = (radio) => radio * 2 * Math.PI;
const areaC = (radio) => radio ** 2 * Math.PI;

console.log("El radio mide: " + radio + " cms")
console.log("El perimetro del circulo es: " + perimetroC(radio) + " cms");
console.log("El area de la circunferencia es: " + areaC(radio) + " cms cuadrados");

console.groupEnd();

//Interaccion con Html

function perimetroCUAD() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCUA(value);
    alert(perimetro);
}

function areaCUAD() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCUA(value);
    alert(area);
}