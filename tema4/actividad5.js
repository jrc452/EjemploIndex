const precioHora = 20; // Precio por hora en euros

function calcularPrecio() {
    let horas = parseInt(document.getElementById("horas").value);
    const alumnoAntiguo = document.getElementById("alumnoAntiguo").checked;
    const beca = document.getElementById("beca").checked;
    const matematicas1 = document.getElementById("matematicas1").checked;
    const historia = document.getElementById("historia").checked;
    const matematicas2 = document.getElementById("matematicas2").checked;
    const fisica = document.getElementById("fisica").checked;

    // Ocultar mensajes de error y resultados anteriores
    document.getElementById("mensajeError").innerHTML = '';
    document.getElementById("precioFinal").innerHTML = '';
    document.getElementById("precioConBeca").innerHTML = '';

    // Validación de la elección de materias
    if (matematicas2 && !matematicas1) {
        document.getElementById("mensajeError").innerHTML = "Error: Debes seleccionar 'Matemáticas I' para poder elegir 'Matemáticas II'.";
        return;
    }

    // Calcular el precio total basado en las horas
    let precioTotal = horas * precioHora;

    // Aplicar descuento si es antiguo alumno
    if (alumnoAntiguo) {
        precioTotal *= 0.65; // 35% de descuento
    }

    // Mostrar el precio total
    document.getElementById("precioFinal").innerHTML = `Total: ${precioTotal.toFixed(2)} €`;

    // Aplicar beca si está seleccionada
    if (beca) {
        const precioConBeca = precioTotal * 0.20; // 20% del precio total
        document.getElementById("precioConBeca").innerHTML = `Precio con beca: ${precioConBeca.toFixed(2)} €`;
    } else {
        document.getElementById("precioConBeca").innerHTML = '';
    }
}