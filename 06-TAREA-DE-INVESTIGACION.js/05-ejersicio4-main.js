function ejecutarEjercicio4() {
    let numero = prompt("Ingrese un número para calcular su factorial:");
    if (!numero || isNaN(numero) || numero < 0) {
        document.getElementById("res4").textContent = "Ingrese un número ≥ 0";
        return;
    }
    numero = parseInt(numero);
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById("res4").textContent = `El factorial de ${numero} es: ${factorial}`;
}