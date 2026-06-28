function ejecutarEjercicio3() {
    let numero = prompt("Ingrese un número entero:");
    if (!numero || isNaN(numero)) {
        document.getElementById("res3").textContent = "Ingrese un número válido";
        return;
    }
    numero = parseInt(numero);
    let resultado = numero % 2 === 0 ? "PAR" : "IMPAR";
    document.getElementById("res3").textContent = `El número ${numero} es ${resultado}`;
}