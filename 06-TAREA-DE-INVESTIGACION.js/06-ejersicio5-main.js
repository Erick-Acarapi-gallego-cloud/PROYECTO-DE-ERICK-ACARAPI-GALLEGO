function ejecutarEjercicio5() {
    let num = document.getElementById("numeroTabla").value;
    if (!num || isNaN(num) || num < 1 || num > 10) {
        document.getElementById("res5").textContent = "Ingrese un número entre 1 y 10";
        return;
    }
    num = parseInt(num);
    let salida = `Tabla de multiplicar del ${num}:\n`;
    for (let i = 1; i <= 10; i++) {
        salida += `${num} × ${i} = ${num * i}\n`;
    }
    document.getElementById("res5").textContent = salida;
}