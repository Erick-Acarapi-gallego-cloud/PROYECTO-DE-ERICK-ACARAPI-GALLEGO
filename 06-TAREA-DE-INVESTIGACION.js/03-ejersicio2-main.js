function ejecutarEjercicio2() {
    let cantidad = prompt("¿Cuántos números desea sumar?");
    if (!cantidad || isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("res2").textContent = "Cantidad inválida";
        return;
    }
    let suma = 0;
    for (let i = 1; i <= cantidad; i++) {
        let num = prompt(`Ingrese el número ${i}:`);
        if (!num || isNaN(num)) {
            document.getElementById("res2").textContent = "Solo ingrese números";
            return;
        }
        suma += parseFloat(num);
    }
    document.getElementById("res2").textContent = `La suma total es: ${suma}`;
}