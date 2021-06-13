
//codigo para el menu hamburguesa
    function menuHamburguesa (){
        let menu = document.getElementById('boton-menu');
        let direcciones = document.getElementById('direcciones')
        let barNav = document.getElementById('nav')
        if (menu.checked == true){
            direcciones.style.transition = '1s'
            direcciones.style.transform = 'translateY(-140%)'
            direcciones.style.display = 'flex'
            barNav.style.backgroundColor = 'rgba(0, 0, 0, 0.137)'
            

        }
        else{
            direcciones.style.transition = '1s'
            direcciones.style.transform = 'translateY(0%)'
            barNav.style.transition = '1s'
            barNav.style.backgroundColor = 'rgba(28, 36, 36, 0.972)'
        }
    
    }
//codigo para el envio del formulario
    function enviarMensaje () {
        alert("Los mensajes no se podran enviar por el momento, no cuento con servidor habilitado. Contactame por redes mis redes sociales!!")
    }