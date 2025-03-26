function collectData() {
    var nombre = prompt('Por favor, introduce tu nombre:');
    var edad = prompt('Por favor, introduce tu edad:');
    var correo = prompt('Por favor, introduce tu correo electrónico:');
    document.getElementById('result').innerHTML =
        '<h2>RESALTDOS:</h2><p><font style="font-weight:bold">Nombre:</font> ' + nombre + '</p><p><font style="font-weight:bold">Edad:</font> ' + edad + '</p><p><font style="font-weight:bold">Correo:</font> ' + correo + '</p>';
}