$(document).ready(function(){
    const btn = $('#btn_iniciar')
    const btn1 = $('#btn_listar')
    const mail = localStorage.getItem('mail')

    if(mail == "streetay@gmail.com"){
        if (mail) { 
            btn.hide()
            btn1.show()

            
        } else {
            btn.show()
            btn1.hide()
        }
    }else {
        if (mail) { 
            btn.hide()
            btn1.hide()

            
        } else {
            btn.show()
            btn1.hide()
        }
    }
})

$(document).ready(function(){
    const btn = $('#btn_cerrar')
    const correo = localStorage.getItem('mail')

    if (!correo) {
        btn.hide() 
    } else {
        btn.show()
    }
    
    btn.click(function(){
        localStorage.removeItem('mail')
        window.location.href = "index.html"
    })
})