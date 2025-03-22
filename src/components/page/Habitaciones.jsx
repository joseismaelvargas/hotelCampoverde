
import { useState } from "react"
import "../css/contenido.css"
import Basicos from "../cuartos/Basicos"
import Premiun from "../cuartos/Premiun"
import Junior from "../cuartos/Junior"
import service3 from "/img/service3.jpg"
export const Habitaciones = ({logeadoUser}) => {

   const[habitaciones,sethabitaciones]=useState(1)
     
   const Suites=habitaciones==1?<Basicos></Basicos>:habitaciones==2?<Premiun></Premiun>:habitaciones==3?<Junior logeado={logeadoUser} ></Junior>:null
  return (
   <main className="main">
   <section className="hotel ">
                <div className="section-hotel">
                   <h1 className='subtitle-habitaciones'>HABITACIONES</h1> 
                   <p  className="text-habitacion">Tenemos las mejores habitaciones para que disfrutes de una estancia cómoda y placentera, rodeado de naturaleza y tranquilidad.
                    Ya sea que busques una escapada romántica, un viaje familiar o un retiro en la naturaleza, en Hotel Campo Verde encontrarás el espacio ideal para relajarte y desconectar. <strong>¡Reserva ahora y vive una experiencia inolvidable!</strong></p>
              
               
                </div>

                <img src={service3} alt="" className="img-habitacion" />


              
    
            </section>

            <div className="div-habitaciones">
               
               <p onClick={()=>sethabitaciones(1)} className={`${habitaciones===1?"btn-suites":""}`}>Suite Estandard  </p>
               <p>/</p>
               <p onClick={()=>sethabitaciones(2)} className={`${habitaciones===2?"btn-suites":""}`}> Suite Premiun  </p>
               <p>/</p>
               <p onClick={()=>sethabitaciones(3)} className={`${habitaciones===3?"btn-suites":""}`}>Suite Junior </p>
              </div>
               <section className="container my-10 mx-auto">
                  {
                  Suites
               }
                 </section>
            <div className="contactos">
                 
               
                <div className="contactos-header">
                   <h3>CONTACTOS</h3> 
                    </div>
                <p>ADMINISTRACION:</p>
                <p>Ruta: 11KM 571</p>
                <p>Cel:381587939</p>
                <p>email:infohotelCampover@gmail.com</p>
                
                 <p>SALON DE FIESTAS:</p>
                <p>Ruta 11Km 571</p>
                <p>Buenos aires</p>
                <p>Cel:382324554</p>
               </div>
      </main>
  )
}

export default Habitaciones
