import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { hotel } from '../js/datosservices';

const Footer = ({logeado}) => {
  return (
    <>
    <footer className='footer-contenido'>
        <div className='div-icono'>
                 <i className='icono-footer'><FaFacebookF></FaFacebookF></i>
                 <i className='icono-footer'><FaInstagram></FaInstagram></i>
                 <i className='icono-footer'><FaTwitter></FaTwitter></i>
                 <i className='icono-footer'><FaYoutube></FaYoutube></i>
        </div> 
  
        <div className='menu-foooter' >
            <div className='div-link'>
              <Link end to={"/"} className='link-footer'>HOTEL</Link>
              | 
              <Link end to={"/habitaciones"} className='link-footer'>HABITACIONES</Link>
          
           |
           <Link end to={"/servicios"} className='link-footer'>SERVICIOS</Link>
           {
            logeado.length>0?   <Link  end to={"/admin"}className='link-footer'>| ADMINISTRACION</Link>:""
           }
           |
           <Link end to={`/hotel/${hotel[3].id}`} className='link-footer'>SALON</Link>
           |
           
         
            </div>
           
           <div>
           
© 2025 Hotel Campos Verdes Theme By Interior Lite
           </div>
        </div>

    </footer>
    </>
  )
}

export default Footer
