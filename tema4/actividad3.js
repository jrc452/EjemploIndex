$(document).ready(calculator);

function calculator() {
    let expression = ""; // Almacena la expresión a calcular

    // Mostrar el valor presionado en la pantalla
    $(".btn").click(function () {
        let value = $(this).data("value");

        // Si el valor es "C", limpiar la pantalla
        if (value === "C") {
            expression = "";
            $("#display").val("");
        }
        // Si el valor es "=", evaluar la expresión
        else if (value === "=") {
            try {
                expression = eval(expression).toString(); // Evaluar la expresión
                $("#display").val(expression);
            } catch (error) {
                $("#display").val("Error");
                expression = "";
            }
        }
        // Si es otro botón, agregar el valor al final de la expresión
        else {
            expression += value;
            $("#display").val(expression);
        }
    });
}