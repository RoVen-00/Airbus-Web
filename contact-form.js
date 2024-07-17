document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validarFormulario(this)) {
            alert('Formulario enviado correctamente');
        }
    });

    function validarFormulario(formulario) {
        
        var nombre = formulario.name.value;
        var apellido = formulario.lastname.value;
        var email = formulario.email.value;
        var asunto = formulario.subject.value; 
        var cuerpo = formulario.bodytext.value;


        var nombreApellidoRegex = /^[A-Z][a-zA-Z\s]{0,49}$/;
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        var asuntoRegex = /^[A-Z][a-zA-Z\s]{0,49}$/;
        var cuerpoRegex = /^[A-Z][a-zA-Z\s.,;:!?]{19,140}$/;

        if (!nombreApellidoRegex.test(nombre)) {
            alert("El nombre no es válido. Debe comenzar con una letra mayúscula, no contener caracteres especiales y tener entre 2 y 10 caracteres.");
            return false;
        }

        if (!nombreApellidoRegex.test(apellido)) {
            alert("El apellido no es válido. Debe comenzar con una letra mayúscula, no contener caracteres especiales y tener entre 2 y 10 caracteres.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("El email no es válido. No debe contener letras mayúsculas, debe contener un carácter '@' y un '.' solo una vez.");
            return false;
        }

        if (!asuntoRegex.test(asunto)) {
            alert("El asunto no es válido. Debe comenzar con una letra mayúscula, no contener caracteres especiales y tener entre 3 y 20 caracteres.");
            return false;
        }

        if (!cuerpoRegex.test(cuerpo)) {
            alert("El cuerpo de texto no es válido. Debe comenzar con una letra mayúscula, no contener caracteres especiales y tener entre 20 y 150 caracteres. Los signos de puntuación permitidos son .,;:!?");
            return false;
        }

        return true;
    }
});