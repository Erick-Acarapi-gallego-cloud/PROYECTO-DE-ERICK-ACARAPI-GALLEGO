
function ejercicio4() {
    let num = parseInt(prompt("Ingresa un número:"));
    if (isNaN(num) || num < 0) {
        alert("Ingresa un número válido mayor o igual a 0");
        return;
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    let mensaje = `El factorial de ${num} es: ${factorial}`;
    alert(mensaje);
    document.getElementById("res4").textContent = mensaje;
}