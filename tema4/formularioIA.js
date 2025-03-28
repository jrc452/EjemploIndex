function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
    var message = 'Nombre: ' + name + '\nCorreo: ' + email + '\nGenero: ' + gender;
    prompt('DATOS DEL FORMULARIO:', message);
};