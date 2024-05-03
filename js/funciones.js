$(document).ready(function() {
    $('#btn_crearUsuario').click(function(){
        let mail = $('#txt_nuevoCorreo').val()
        let pass = $('#txt_nuevoContrasena').val()
        let nombre = $('#txt_nuevoNombre').val()
        let apellido = $('#txt_nuevoApellido').val()

        let url = "https://programadormaldito.cl/route/usuario_almacenar"

        let datos = {
            mail: mail,
            pass: pass,
            nombre: nombre,
            apellido: apellido
        }

        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(datos),

            success: function(response){
                if(response[0].RESPUESTA == "0") {
                    alert('Usuario ya existe')
                }else{
                    alert('Usuario Creado')
                }
            }
        })

    })
})

$('#btn_ingresar').click(function(){
    let mail = $('#txt_mail').val()
    let pass = $('#txt_pass').val()

    let url = "https://programadormaldito.cl/route/usuario_login"

    let datos = {
        mail: mail,
        pass: pass
    }

    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(datos),


        success: function(response){
            if(response[0].RESPUESTA == "0") {
                alert('Credencailes invalidas')
            }else{
                window.location.href = "index.html"
            }
        }
    })

})