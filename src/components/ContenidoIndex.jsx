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
                <FaHotel className="icon"></FaHotel>
                <h2>HABITACION</h2>
                <p>Podrás elegir entre habitaciones Suite o Standar. Calidad y Confort.</p>
                <button>Leer mas</button>
            </div>
            <div className="div">
               <MdOutlineBedtime className="icon"></MdOutlineBedtime>
                <h2>DESCANSO</h2>
                <p>Sentite en un lugar unico, tranquilo y agradable. Aqui, el tiempo no pasa.</p>
                <button>Leer mas</button>
            </div>
            <div className="div">
               <h2>PISCINA</h2>
               <FaSwimmingPool className="icon"></FaSwimmingPool>
               <p>Difrutar de nuestra piscina en un lugar optimo e íntimo</p>
               <button>Leer mas</button>
            </div>
            <div className="div">
                <LuPartyPopper className="icon"></LuPartyPopper>
                <h2>SALON</h2>
                <p>Un lugar pensado y soñado para festejar tus mejores momentos. Casamientos, cumpleaños, aniversarios, convenciones, eventos en general</p>
                <button>Leer mas</button>

            </div> 

           </div>
        </section>
        </>
    )
}