// Ejercicio 3: Suma de pares e impares
function ejercicio3() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let numero;

    while (true) {
        numero = parseInt(prompt("Ingresa un número (0 para terminar):"));

        if (isNaN(numero)) {
            alert("Ingresa un valor válido");
            continue;
        }

        if (numero === 0) break;

        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero;
        }
    }

    let mensaje = `Suma de pares: ${sumaPares}\nSuma de impares: ${sumaImpares}`;
    alert(mensaje);
    document.getElementById("res3").innerHTML = mensaje.replace("\n", "<br>");
}