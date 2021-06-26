
// navbar efecto scroll
let PosicionPrincipal = window.pageYOffset
window.onscroll = function (){
    let DesplasiamientoActual = window.pageYOffset
    if (DesplasiamientoActual >= PosicionPrincipal){
        let mostrar = document.getElementById('nav').style.top = '-100px'
        nav.style.transitionDuration = '1s'
    }
    else{
        let ocultar = document.getElementById('nav').style.top = '0px'
        nav.style.transitionDuration = '1s'

    }

    if(DesplasiamientoActual >= 5){
        let mostrar = document.getElementById('nav').style.backgroundColor = 'black'
    }
    else{
        let mostrar = document.getElementById('nav').style.backgroundColor = 'transparent'
    }
    PosicionPrincipal = DesplasiamientoActual
}



alert("Pagina En Desarrollo ( No Habilitada )")



//funcion para menu menuHamburguesa
function menuHamburguesa () {
    let navmenu = document.getElementById('menu')
    let navenlaces = document.getElementById('enlaces')
    let navlogo = document.getElementById('logo')
    let icono = document.getElementById('menu-icono')
    if (navmenu.checked == true) {
        navenlaces.style.transform = 'translateY(0%)'
        navenlaces.style.backgroundColor = 'white'
        navenlaces.style.opacity = '100%'
        navlogo.style.filter = 'invert(100%)'
        icono.style.filter = 'invert(0%)'
    }
    else{
        navenlaces.style.transform = 'translateY(-100%)'
        navlogo.style.filter ='invert(0%)'
        icono.style.filter = 'invert(100%)'
    }
}