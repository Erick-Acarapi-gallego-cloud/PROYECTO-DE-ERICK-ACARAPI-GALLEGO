
function ejercicio5() {
    let secreto = Math.floor(Math.random() * 10) + 1;
    let intento;
    let acertado = false;
    alert("Adivina el número entre 1 y 10");
    while (!acertado) {
        intento = parseInt(prompt("Escribe tu número:"));
        if (isNaN(intento) || intento < 1 || intento > 10) {
            alert("Solo números entre 1 y 10");
            continue;
        }
        if (intento === secreto) {
            alert("¡Felicidades! Adivinaste");
            acertado = true;
        } else if (intento < secreto) {
            alert("Muy bajo, intenta de nuevo");
        } else {
            alert("Muy alto, intenta de nuevo");
        }
    }
    document.getElementById("res5").textContent = `El número secreto era: ${secreto}`;
}