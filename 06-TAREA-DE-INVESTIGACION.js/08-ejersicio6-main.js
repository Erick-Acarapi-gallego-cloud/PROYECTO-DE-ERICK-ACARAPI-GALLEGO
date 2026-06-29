
function ejercicio6() {
    let frase = document.getElementById("frase").value.toLowerCase();
    if (frase === "") {
        document.getElementById("res6").textContent = "Escribe una frase primero";
        return;
    }
    let contador = 0;
    let vocales = "aeiouáéíóú";
    for (let letra of frase) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    document.getElementById("res6").textContent = `La frase tiene ${contador} vocales`;
}