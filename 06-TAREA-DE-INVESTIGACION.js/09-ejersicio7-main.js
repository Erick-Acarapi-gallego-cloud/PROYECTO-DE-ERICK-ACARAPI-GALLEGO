// Ejercicio 7: Serie 0, 1, 0, 0, 1...
function ejercicio7() {
    let n = parseInt(prompt("Ingresa la cantidad de términos:"));

    if (isNaN(n) || n < 1) {
        alert("Ingresa un número mayor o igual a 1");
        return;
    }

    let serie = "Serie: ";
    let contador = 0;

    for (let i = 1; i <= n; i++) {
        if (contador < i - 1) {
            serie += "0 ";
            contador++;
        } else {
            serie += "1 ";
            contador = 0;
        }
    }

    alert(serie);
    document.getElementById("res7").textContent = serie;
}