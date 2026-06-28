function ejecutarEjercicio6() {
    let n1 = prompt("Ingrese el primer número:");
    let n2 = prompt("Ingrese el segundo número:");
    let n3 = prompt("Ingrese el tercer número:");
    if (!n1 || !n2 || !n3 || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("res6").textContent = "Ingrese solo números válidos";
        return;
    }
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    let mayor = Math.max(n1, n2, n3);
    document.getElementById("res6").textContent = `El número mayor es: ${mayor}`;
}