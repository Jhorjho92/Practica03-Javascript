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

function validarNumero(e, entrada){
    var key = window.event ? e.keyCode : e.which;
    if(((48 <= key && key <= 57) || (key == 0) || (key == 8)) && entrada.value.length < 10){ 
        if(entrada.id == 'cedula'){
            document.getElementById("msjCedula").innerHTML = ''
        }
        
        if(entrada.id == 'telefono'){
            document.getElementById("msjTelefono").innerHTML = ''
        }
        return true; 
    }else{
        var mensaje = "Ingrese únicamente números"
        if(entrada.id == 'cedula' && entrada.value.length < 10){
            document.getElementById("msjCedula").innerHTML = mensaje
            document.getElementById("msjCedula").style.color = 'orange'
        }
        
        if(entrada.id == 'telefono' && entrada.value.length < 10){
            document.getElementById("msjTelefono").innerHTML = mensaje
            document.getElementById("msjTelefono").style.color = 'orange'
        }
        
        return false; 
    } 
};

function validarLetra(e, entrada) {
    var key = window.event ? e.keyCode : e.which;
    if((65 <= key && key <= 90) || (97 <= key && key <= 122) ){ 
        if(entrada.id == 'nombres' && entrada.value.length){
            document.getElementById("msjNombres").innerHTML = ''
        }
        
        if(entrada.id == 'apellidos' && entrada.value.length){
            document.getElementById("msjApellidos").innerHTML = ''
        }
        return true; 
    }else{ 
        var mensaje = "Ingrese únicamente letras"
        if(entrada.id == 'nombres' && entrada.value.length){
            document.getElementById("msjNombres").innerHTML = mensaje
            document.getElementById("msjNombres").style.color = 'orange'
        }
        
        if(entrada.id == 'apellidos' && entrada.value.length){
            document.getElementById("msjApellidos").innerHTML = mensaje
            document.getElementById("msjApellidos").style.color = 'orange'
        }
        return false; 
    } 

};