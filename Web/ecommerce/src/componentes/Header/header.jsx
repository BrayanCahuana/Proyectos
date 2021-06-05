import React from 'react'
import "./header.css"
function Header () {
return(
    <div className="contenedor-header">
        <div className="imagen-logo">
            <a href="/">
                <img src="https://c0.klipartz.com/pngpicture/882/672/gratis-png-shopify-ecommerce-logo-magento-ventas-negocio.png" alt=""/>
                </a>
        </div>
        <div className="secciones">
            <a href="">Productos</a>
            <a href="">Lorem</a>
            <a href="">Loremadas</a>
        </div>
        <div className="carrito-usuario">
            <a href="">
                <img src="https://www.flaticon.es/svg/vstatic/svg/711/711192.svg?token=exp=1620757959~hmac=ef5470110aaa14202df109e4b94fc83b" alt=""/> 
            </a>
            <a href="">
                <img src="https://www.flaticon.es/svg/vstatic/svg/709/709722.svg?token=exp=1620757972~hmac=e9985762e7dc463de9c42d52efdefc81" alt=""/>
            </a>
        </div>
    </div>
)
}
export default Header