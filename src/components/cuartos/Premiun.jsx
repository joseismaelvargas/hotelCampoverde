import React, { useState,useEffect} from 'react'
import { URL_habitaciones } from '../js/peticionesHabitaciones'
import "./cuartos.css"
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
const Premiun = () => {
  const [premiun,setPremiun]=useState([]);
  const [load,setload]=useState(null)
    const APiHAbitaciones=async()=>{
      try{
         const response=await fetch(URL_habitaciones+"/crear")
         if(response.status===200){
          const data=await response.json()
          const filter=data.filter((item)=>item.opciones==="Suite Premiun")
          if(filter){
            setPremiun(filter)   
            setload(filter)
        
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
    {load===null?<div className='devload'>
  <img src='https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-15-221_512.gif'  className='imgload'></img>
 </div>
     :premiun.map((item)=>


  <div   key={item._id}
    initial={{ opacity: 0, x: 100, scale: 0.1 }} 
    animate={{ opacity: 1, x: 0, scale: 1 }}     
    transition={{ duration: 0.5, delay: 0.1 }} className='div-cuartos'>
         <Swiper
         className='imgdev' modules={[Autoplay, Navigation,Pagination]}
              slidesPerView={1} 
              spaceBetween={0} 
            
            autoplay={{
                delay:3000
            }}
        
            pagination={{
                clickable: true,
              }}
            loop={true} >
                   {item.ImagenesHabitacion?.map((imgurl,i)=>(
                                  <SwiperSlide key={i}>
                                          <img src={imgurl} alt={`img-${i}`} className="img-cuartos" /> 
                                      </SwiperSlide>
                                ))}
                  </Swiper>
      <div className='info'>
         <h3 className='suit-title'>{item.opciones}</h3>
         <div className='info-habitacion'>
           <p>servicio al cuarto</p><p>2 camas</p>
         </div>
        
         <p className='suit-p'>{item.info}</p>
         
       <Link  end to={`/verHabitacion/${item._id}`} className='reservar'>Ver habitacion</Link>
         
      </div> 
       
      </div>

      )
    }
  
      </>
  )
}

export default Premiun
