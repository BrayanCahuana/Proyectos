
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


    //popup
    function abrirpop () {
        abrir = document.getElementById('enviar')
        popimagen = document.getElementById('popup')

        abrir.addEventListener('click',() => {
            popimagen.style.display = 'flex'
        })
    }

    //cerrar popup
    function pop (){
        cerrar = document.getElementById('close')
        popup = document.getElementById('popup')
        cerrar.addEventListener('click',() => {
            popup.style.display = 'none'
        })
}

//botones flechas
function flechas () {
    selecion = document.getElementById('selecion')
    izquierda = document.getElementById('izquierdo')
    centro = document.getElementById('centro')
    derecha = document.getElementById('derecho')
    
    izquierda.addEventListener('click',() => {
            selecion.style.transform = 'translateX(85%)'
            selecion.style.transition = '1s'
        })
        
    centro.addEventListener('click',() => {
            selecion.style.transform = 'translateX(0%)'
            selecion.style.transition = '1s'
        })
    derecha.addEventListener('click',() => {
            selecion.style.transform = 'translateX(-85%)'
            selecion.style.transition = '1s'
        })
}