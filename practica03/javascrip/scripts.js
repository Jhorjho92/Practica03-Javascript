function validarCamposObligatorios() {
    var bandera = false;
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            if (elemento.id == 'cedula') {
                elemento.style.border = "1px red solid"
                document.getElementById("msjCedula").innerHTML = "El campo es obligatorio"
                document.getElementById("msjCedula").style.color = "red"
             }

             if (elemento.id == 'nombres') {
                nombres = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("msjNombres").innerHTML = "El campo es obligatorio"
                document.getElementById("msjNombres").style.color = "red"
            }

            if (elemento.id == 'apellidos') {
                apellidos = elemento.id.value;
                elemento.style.border = "1px red solid"
                document.getElementById("msjApellidos").innerHTML = "El campo es obligatorio"
                document.getElementById("msjApellidos").style.color = "red"
            }

            if (elemento.id == 'direccion') {
                elemento.style.border = "1px red solid"
                document.getElementById("msjDireccion").innerHTML = "El campo es obligatorio"
                document.getElementById("msjDireccion").style.color = "red"
            }

            if (elemento.id == 'telefono') {
                elemento.style.border = "1px red solid"
                document.getElementById("msjTelefono").innerHTML = "El campo es obligatorio"
                document.getElementById("msjTelefono").style.color = "red"
            }

            if (elemento.id == 'fechaNacimiento') {
                elemento.style.border = "1px red solid"
                document.getElementById("msjFechaNacimiento").innerHTML = "El campo es obligatorio"
                document.getElementById("msjFechaNacimiento").style.color = "red"
            }

            if (elemento.id == 'mail') {
                elemento.style.border = "1px red solid"
                document.getElementById("msjMail").innerHTML = "El campo es obligatorio"
                document.getElementById("msjMail").style.color = "red"
            }

            if (elemento.id == 'password1') {
                elemento.style.border = "1px red solid"
                document.getElementById("msjPassword1").innerHTML = "El campo es obligatorio"
                document.getElementById("msjPassword1").style.color = "red"
            }

            if (elemento.id == 'password2') {
                elemento.style.border = "1px red solid"
                document.getElementById("msjPassword2").innerHTML = "El campo es obligatorio"
                document.getElementById("msjPassword2").style.color = "red"
            }
            bandera = false;
        }else{
            if (elemento.id == 'cedula') {
                document.getElementById("msjCedula").innerHTML = ''
             }

             if (elemento.id == 'nombres') {
                document.getElementById("msjNombres").innerHTML = ''
            }

            if (elemento.id == 'apellidos') {
                document.getElementById("msjApellidos").innerHTML = ''
            }

            if (elemento.id == 'direccion') {
                document.getElementById("msjDireccion").innerHTML = ''
            }

            if (elemento.id == 'telefono') {
                document.getElementById("msjTelefono").innerHTML = ''
            }

            if (elemento.id == 'fechaNacimiento') {
                document.getElementById("msjFechaNacimiento").innerHTML = ''
            }

            if (elemento.id == 'mail') {
                document.getElementById("msjMail").innerHTML = ''
            }
            elemento.style.border = '1px black solid'
        }

    }
        
    if (!bandera) { 
        alert(' CAMPOS VACIOS! Rellenar los campos')
        return false;
    } else {
        return true;
    }
}