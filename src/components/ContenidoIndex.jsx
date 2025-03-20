import "../components/css/contenido.css"
import { MdOutlineBedtime } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { FaSwimmingPool } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import frente from"/img/hotel-frente.jpg"
import { Link } from "react-router-dom";
import { hotel } from "./js/datosservices";



export const ContenidoIndex=()=>{
    return(
        <>
        <section>
           <div className="div-padre">
            <div className="div">
                <div className="div-content">
                    <FaHotel className="icon"></FaHotel>
                <h2>HABITACION</h2>
                <p>Podrás elegir entre habitaciones Suite o Standar. Calidad y Confort.Ya sea que busques una experiencia lujosa y funcionalidad de nuestras habitaciones estándar,</p>  
                </div>
              
              <Link className="button" end to={`/hotel/${hotel[0].id}`}>Ver mas</Link>
            </div>
            
            <div className="div">
                <div className="div-content">
                      <MdOutlineBedtime className="icon"></MdOutlineBedtime> 
                      <h2>DESCANSO</h2>
                <p>Sentite en un lugar unico, tranquilo y agradable. Aqui, el tiempo no pasa.donde cada detalle está pensado  en un entorno diseñado para el descanso y la desconexión.</p>
                    
                </div>
             
               
                <Link className="button" end to={`/hotel/${hotel[1].id}`}>Ver mas</Link>
            </div>
            <div className="div"> 
                    <div className="div-content">
                        <FaSwimmingPool className="icon"></FaSwimmingPool>
               <h2>PISCINA</h2>
            
               <p>Difrutar de nuestra piscina en un lugar optimo e íntimoy relajante,  Sumérgete en una experiencia única, rodeado de confort y serenidad</p>

                    </div>
                  
                 
                    <Link className="button" end to={`/hotel/${hotel[2].id}`}>Ver mas</Link>
            </div>
            <div className="div">
                <div className="div-content">
                     <LuPartyPopper className="icon"></LuPartyPopper>
                <h2>SALON</h2>
                <p>Un lugar pensado y soñado para festejar tus mejores momentos. Casamientos, cumpleaños, aniversarios, convenciones, eventos en general</p>

                </div>
               
                
                <Link className="button" end to={`/hotel/${hotel[3].id}`}>Ver mas</Link>

            </div> 

           </div>
           
        </section>
        <section className="hotel container">
            <div className="section-hotel">
               <h1>HOTEL</h1>  
               <p>
               Hotel Campos Verdes ubicado en uno de los barrios mas destacados de la ciudad de San Justo, su arquitectura minimalista y moderna, se emplaza sobre un ambiente natural y cálido, rodeado por la naturaleza y la tranquilidad.</p>
               <img src={frente} alt="hotel" className="img-index" />
            </div>
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

        </section>
        <section className="container m-auto">
            <h2 className="dondeestamos">¿Donde Estamos ?</h2>
            <p className="sm:text-start sm:text-1x3 text-white sm:my-3 sm:mx-40 mx-auto my-3">
    Te invitamos a descubrir la tranquilidad y belleza de <strong>Hotel Campo Verd</strong>.  
    Un refugio perfecto para relajarte y disfrutar de la naturaleza.  
    Ven y vive una experiencia inolvidable con nosotros.
  </p>
  <p className="sm:text-start sm:text-1x3 text-white sm:my-3 sm:mx-40 my-4">
    Ubicado en un entorno natural privilegiado, nuestro hotel es el destino ideal  
    para quienes buscan escapar del estrés de la ciudad y sumergirse en la paz del campo.  
  </p>
            <iframe
    className=" sm:h-100 sm:w-[500px] sm:my-20 sm:m-auto h-80 w-[450px] m-auto"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086164!2d144.95373631590225!3d-37.81627974202157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2zTWVsYm91cm5lLCBBdXN0cmFsaWE!5e0!3m2!1ses-419!2s!4v1631234567890!5m2!1ses-419!2s"
    allowFullScreen=""
    width={"400px"}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
        </section>
        </>
    )
}