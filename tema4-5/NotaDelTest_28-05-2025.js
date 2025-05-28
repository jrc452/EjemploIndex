function calcularNota() {
    const fallos = parseInt(document.getElementById("fallos").value);
    const penalizacion = parseFloat(document.getElementById("penalizacion").value);

    if (isNaN(fallos) || fallos < 0 || fallos > 27) {
        document.getElementById("resultado").innerText = "Introduce un número de fallos válido (0 - 27)";
        return;
    }

    const aciertos = 27 - fallos;
    const notaBruta = (aciertos / 27) * 10;
    const descuento = fallos * penalizacion;
    const notaFinal = Math.max(0, notaBruta - descuento).toFixed(2);

    document.getElementById("resultado").innerText = `Tu nota real es: ${notaFinal} / 10`;
}