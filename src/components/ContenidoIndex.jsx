import "../components/css/contenido.css"
import { MdOutlineBedtime } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { FaSwimmingPool } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";




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
              
                <button>Ver mas</button>
            </div>
            
            <div className="div">
                <div className="div-content">
                      <MdOutlineBedtime className="icon"></MdOutlineBedtime> 
                      <h2>DESCANSO</h2>
                <p>Sentite en un lugar unico, tranquilo y agradable. Aqui, el tiempo no pasa.donde cada detalle está pensado  en un entorno diseñado para el descanso y la desconexión.</p>
                    
                </div>
             
               
                <button>Ver mas</button>
            </div>
            <div className="div"> 
                    <div className="div-content">
                        <FaSwimmingPool className="icon"></FaSwimmingPool>
               <h2>PISCINA</h2>
            
               <p>Difrutar de nuestra piscina en un lugar optimo e íntimoy relajante,  Sumérgete en una experiencia única, rodeado de confort y serenidad</p>

                    </div>
                  
               <button>Ver mas</button>
            </div>
            <div className="div">
                <div className="div-content">
                     <LuPartyPopper className="icon"></LuPartyPopper>
                <h2>SALON</h2>
                <p>Un lugar pensado y soñado para festejar tus mejores momentos. Casamientos, cumpleaños, aniversarios, convenciones, eventos en general</p>

                </div>
               
                <button>Ver mas</button>

            </div> 

           </div>

           <div>
            <h1>Hotel</h1>
            <p>
            Hotel Campos Verdes ubicado en uno de los barrios mas destacados de la ciudad de San Justo, su arquitectura minimalista y moderna, se emplaza sobre un ambiente natural y cálido, rodeado por la naturaleza y la tranquilidad.</p>
            <img src="" alt="" />
           </div>
        </section>
        </>
    )
}