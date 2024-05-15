$(document).ready(function() {
    $('#btn_lsCorreo').click(function() {

        let correo = localStorage.getItem('mail')

        let url = "https://programadormaldito.cl/route/producto_duoc_obtener_x_mail?mail=" + correo;

        $.get(url, function(response) {
            $('#ls_productos').empty(); 
            $('#ls_todo').empty(); 
            let productos = response[0]; 
            if(productos.length > 0) {
                console.log(productos);
                productos.forEach(function(producto) { 
                    let productoHTML = `<br>
                                    <div>
                                        <ul>
                                            <li class="estilo-div">Código: ${producto.p_codigo}</li>
                                            <li class="estilo-div">Nombre: ${producto.p_nombre}</li>
                                            <li class="estilo-div">Descripcion: ${producto.p_descripcion}</li>
                                            <li class="estilo-div">Precio: ${producto.p_precio}</li>
                                            <li class="estilo-div">Usuario: ${producto.p_mail_creado}</li>
                                        </ul>
                                    </div>
                                    <br>`;
                    $('#ls_productos').append(productoHTML)
                });
            } else {
                $('#ls_productos').append("<p>No se encontraron Productos para este usuario.</p>");
            }
        })
    })
})



$(document).ready(function() {
    $('#btn_lsTodo').click(function() {
        let url = "https://programadormaldito.cl/route/producto_duoc_obtener"

        $.get(url, function(response) {
            $('#ls_todo').empty(); 
            $('#ls_productos').empty();
            let productos = response[0]; 
            if(productos.length > 0) {
                console.log(productos);
                productos.forEach(function(producto) { 
                    let productoHTML = `<br>
                                            <div>
                                                <ul>
                                                    <li class="estilo-div">Código: ${producto.p_codigo}</li>
                                                    <li class="estilo-div">Nombre: ${producto.p_nombre}</li>
                                                    <li class="estilo-div">Descripcion: ${producto.p_descripcion}</li>
                                                    <li class="estilo-div">Precio: ${producto.p_precio}</li>
                                                    <li class="estilo-div">Usuario: ${producto.p_mail_creado}</li>
                                                </ul>
                                            </div>
                                    <br>`;
                    $('#ls_todo').append(productoHTML)
                });
            } else {
                $('#ls_todo').append("<p>No se encontraron Productos para este usuario.</p>");
            }
        })
    })
})

