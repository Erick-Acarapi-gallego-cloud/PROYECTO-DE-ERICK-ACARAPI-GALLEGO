function ejecutarEjercicio7() {
    let frase = prompt("Ingrese una palabra o frase:");
    if (!frase || frase.trim() === "") {
        document.getElementById("res7").textContent = "No ingresó ningún texto";
        return;
    }
    frase = frase.toLowerCase();
    let vocales = "aeiou";
    let contador = 0;
    for (let letra of frase) {
        if (vocales.includes(letra)) contador++;
    }
    document.getElementById("res7").textContent = `Cantidad de vocales: ${contador}`;
}