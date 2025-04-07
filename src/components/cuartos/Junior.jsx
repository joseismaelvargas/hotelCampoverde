import React, { useState,useEffect } from 'react'

import "./cuartos.css"
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { URL_habitaciones } from '../js/peticionesHabitaciones';
import { Link } from 'react-router-dom';
const Junior = ({logeado}) => {
const reserva=JSON.parse(sessionStorage.getItem("reservacion"))||[]
const [reservo,setreservo]=useState(reserva)
console.log(reservo)
const [junior,setjunior]=useState([])
  const Nav=useNavigate()

  const elegir=()=>{
   
    Nav("/reservar")
  }
  
  const APiHAbitaciones=async()=>{
    try{
       const response=await fetch(URL_habitaciones+"/crear")
       console.log(response)
       if(response.status===200){
        const data=await response.json()
        const filter=data.filter((item)=>item.opciones==="Suite Junior")
        if(filter){
          setjunior(filter)   
      
        }
       
       }
    }catch{
     console.error("Error en lA REspuesta")
    }
}


useEffect(()=>{
APiHAbitaciones()
},[])
  return (
    <>
    {
      junior.map((item)=>


  <div   key={item._id}
    initial={{ opacity: 0, x: 100, scale: 0.1 }} 
    animate={{ opacity: 1, x: 0, scale: 1 }}     
    transition={{ duration: 0.5, delay: 0.1 }} className='div-cuartos'>
         <Swiper modules={[Autoplay, Navigation,Pagination]}
              slidesPerView={1} 
              spaceBetween={0} 
            
            autoplay={{
                delay:5000
            }}
        
            pagination={{
                clickable: true,
              }}
            loop={true} >
                    <SwiperSlide>
                        <img src={item.imagen1} alt="hotel" className="img-cuartos" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item.imagen2}alt="hotel" className="img-cuartos" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item.imagen3} alt="hotel" className="img-cuartos" /> 
                    </SwiperSlide>
                   
                  </Swiper>
      <div className='info'>
         <h3 className='suit-title'>{item.opciones}</h3>
         <div className='info-habitacion'>
           <p>4 ventanas</p><p>2 camas</p>
         </div>
        
         <p className='suit-p'>{item.info}</p>
         {
         logeado.length>0?<Link  end to={`/reservar/${item._id}`} className='reservar'>RESERVAR AHORA</Link>:<button className='reservar'   data-bs-toggle="modal" data-bs-target="#exampleModal"
            aria-expanded="false" aria-haspopup="true">RESERVAR AHORA</button>
         }
         
      </div> 
       
      </div>

      )
    }
  
      </>
  )
}

export default Junior
