// Ejercicio 2: Número primo
function ejercicio2() {
    let num = parseInt(document.getElementById("numPrimo").value);

    if (isNaN(num) || num < 2) {
        document.getElementById("res2").textContent = "Ingresa un número mayor o igual a 2";
        return;
    }

    let esPrimo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        document.getElementById("res2").textContent = `El número ${num} SÍ es primo`;
    } else {
        document.getElementById("res2").textContent = `El número ${num} NO es primo`;
    }
}