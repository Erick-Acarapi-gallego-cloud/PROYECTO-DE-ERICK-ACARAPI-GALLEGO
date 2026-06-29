
function ejercicio1() {
    let n = parseInt(prompt("Ingresa la cantidad de términos:"));
    if (isNaN(n) || n < 1) {
        alert("Ingresa un número mayor o igual a 1");
        return;
    }
    let a = 0, b = 1;
    let serie = "Serie: ";
    for (let i = 1; i <= n; i++) {
        serie += a + " ";
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    alert(serie);
    document.getElementById("res1").textContent = serie;
}