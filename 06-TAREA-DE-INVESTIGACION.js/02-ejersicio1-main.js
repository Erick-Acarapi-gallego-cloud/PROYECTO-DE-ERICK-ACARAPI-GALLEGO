function ejecutarEjercicio1() {
    let cantidad = prompt("Ingrese la cantidad de términos:");
    if (!cantidad || isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("res1").textContent = "Ingrese un número mayor a 0";
        return;
    }
    let a = 0, b = 1, serie = "Serie Fibonacci:\n";
    for (let i = 0; i < cantidad; i++) {
        serie += a + " ";
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    document.getElementById("res1").textContent = serie;
}