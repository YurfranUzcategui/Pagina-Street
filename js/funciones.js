$(document).ready(function() {
    $('#btn_crearUsuario').click(function(){
        let mail = $('#txt_nuevoCorreo').val()
        let pass = $('#txt_nuevoContrasena').val()
        let nombre = $('#txt_nuevoNombre').val()
        let apellido = $('#txt_nuevoApellido').val()

        let url = "https://programadormaldito.cl/route/usuario_duoc_almacenar"

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
                if(response[0].RESPUESTA == "NOK") {
                    Swal.fire({
                        title: "Informacion",
                        text: "Este Usuario ya existe",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                    $('#txt_nuevoCorreo').val(''); 
                    $('#txt_nuevoContrasena').val(''); 
                    $('#txt_nuevoNombre').val(''); 
                    $('#txt_nuevoApellido').val('');
                }else{
                    Swal.fire({
                        title: "Informacion",
                        text: "Usuario creado exitosamente",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                    $('#txt_nuevoCorreo').val(''); 
                    $('#txt_nuevoContrasena').val(''); 
                    $('#txt_nuevoNombre').val(''); 
                    $('#txt_nuevoApellido').val('');
                }
            }
        })

    })
})

$('#btn_ingresar').click(function(){
    let mail = $('#txt_mail').val()
    let pass = $('#txt_pass').val()

    let url = "https://programadormaldito.cl/route/usuario_duoc_login"

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

            if(mail == '' || pass == '') {
                let mensaje = document.getElementById("div_oculto");
                mensaje.classList.remove("elemento-oculto");

            }else if(response[0].RESPUESTA == "LOGIN NOK") {
                let mensaje = document.getElementById("div_oculto");
                mensaje.classList.remove("elemento-oculto");
                $('#txt_mail').val(''); 
                $('#txt_pass').val(''); 
                
            }else if(mail == 'streetay@gmail.com' & pass == '12345') {
                window.location.href = "almacenarProducto.html"
                localStorage.setItem('mail', mail); 
            }else{
                window.location.href = "index.html";
            }
        }
    })
})

$(document).ready(function() {
    $('#btn_ingresarProducto').click(function(){
        let codigo = $('#txt_nuevoCodigo').val()
        let nombre = $('#txt_nuevoNombre').val()
        let descripcion = $('#txt_nuevoDescripcion').val()
        let precio = $('#txt_nuevoPrecio').val()
        let correo = localStorage.getItem('mail')

        let url = "https://programadormaldito.cl/route/producto_duoc_almacenar"

        let datos = {
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            mail: correo
        }

        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(datos),

            success: function(response){
                if(codigo == '' || nombre == '' || descripcion == '' || precio == '') {
                    alert('Ingrese valores')
                }else if(response[0].RESPUESTA == "NOK") {
                    Swal.fire({
                        title: "Informacion",
                        text: "Este Codigo de producto ya existe",
                        icon: "error",
                        confirmButtonText: "OK"
                    });
                    $('#txt_nuevoCodigo').val(''); 
                    $('#txt_nuevoNombre').val(''); 
                    $('#txt_nuevoDescripcion').val(''); 
                    $('#txt_nuevoPrecio').val(''); 
                }else{
                    Swal.fire({
                        title: "Informacion",
                        text: "Producto creado exitosamente",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                    $('#txt_nuevoCodigo').val(''); 
                    $('#txt_nuevoNombre').val(''); 
                    $('#txt_nuevoDescripcion').val(''); 
                    $('#txt_nuevoPrecio').val('');
                    
                }
            }
        })

    })
})