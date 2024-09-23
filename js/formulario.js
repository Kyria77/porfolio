const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const mensajeInput = document.getElementById("mensaje");
const formulario = document.getElementById("form");

function validarNombre(){
    const nombre = nombreInput.value;
    const nombrePattern = /^[a-zA-Z ][a-zA-Z0-9]*$/
    if(nombre.length >= 3 && nombrePattern.test(nombre)){
        nombreInput.classList.add('valido');
        nombreInput.classList.remove('invalido');
        document.getElementById('nombreError').textContent = "";
    }else{
        nombreInput.classList.add('invalido');
        nombreInput.classList.remove('valido');
        document.getElementById("nombreError").textContent = "El nombre de usuario debe tener al menos 3 caracteres y empezar con una letra";
    }
}

function validarTelefono(){
    const telefono = telefonoInput.value;
    const telefonoPattern = /^[0-9]{9}$/
    if(telefonoPattern.test(telefono)){
        telefonoInput.classList.add('valido');
        telefonoInput.classList.remove('invalido');
        document.getElementById('telefonoError').textContent = "";
    }else{
        telefonoInput.classList.add('invalido');
        telefonoInput.classList.remove('valido');
        document.getElementById("telefonoError").textContent = "El número de teléfono debe tener 9 dígitos y contener solo números";
    }
}

function validarEmail(){
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailPattern.test(email)){
        emailInput.classList.add('valido');
        emailInput.classList.remove('invalido');
        document.getElementById('emailError').textContent = "";
    }else{
        emailInput.classList.add('invalido');
        emailInput.classList.remove('valido');
        document.getElementById("emailError").textContent = "Ingrese un correo electrónico válido";
    }
}

function validarmensaje(){
    const mensaje = mensajeInput.value;
    const mensajePattern = /^[a-zA-Z ][a-zA-Z0-9]*$/
    if(mensaje.length >= 20 && mensajePattern.test(mensaje)){
        mensajeInput.classList.add('valido');
        mensajeInput.classList.remove('invalido');
        document.getElementById('mensajeError').textContent = "";
    }else{
        mensajeInput.classList.add('invalido');
        mensajeInput.classList.remove('valido');
        document.getElementById("mensajeError").textContent = "El mensaje de usuario debe tener al menos 20 caracteres y empezar con una letra";
    }
}


function resetFormulario(){
    formulario.reset();
    nombreInput.classList.remove('valido');
    telefonoInput.classList.remove('valido');
    emailInput.classList.remove('valido');
    mensajeInput.classList.remove('valido');
}




nombreInput.addEventListener('input', validarNombre);
telefonoInput.addEventListener('input', validarTelefono);
emailInput.addEventListener('input', validarEmail);
mensajeInput.addEventListener('input', validarmensaje);

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    validarNombre();
    validarEmail();
    validarTelefono();
    validarmensaje();

    if(nombreInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido') && mensajeInput.classList.contains('valido')){
        alert("Formulario enviado correctamente");
        resetFormulario();
        formulario.submit();
    }else{
        alert("Por favor, corrija los errores en el formulario");
    }
})