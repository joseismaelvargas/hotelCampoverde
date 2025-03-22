import React from 'react'

import "./cuartos.css"
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

const Junior = ({logeado}) => {
  const Nav=useNavigate()
  const elegir=()=>{
   
    Nav("/reservar")
  }
  return (
    <>
    <div  
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
                        <img src="https://tse2.mm.bing.net/th?id=OIP.7MU2WKrZi7X8Lu-aSmgMHQHaFS&pid=Api&P=0&h=180" alt="hotel" className="img-cuartos" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.R_wbK0RUPdvM3ImxRI2MkAHaE8&pid=Api&P=0&h=180"alt="hotel" className="img-cuartos" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.jnA17qCkKNvJIRlZeqUugwHaEv&pid=Api&P=0&h=180" alt="hotel" className="img-cuartos" /> 
                    </SwiperSlide>
                   
                  </Swiper>
      <div className='info'>
         <h3 className='suit-title'>Suite Jumior</h3>
         <div className='info-habitacion'>
           <p>4 ventanas</p><p>2 camas</p>
         </div>
        
         <p className='suit-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sunt quibusdam deleniti ex se</p>
         {
         logeado.length?<button onClick={elegir} className='reservar'>RESERVAR AHORA</button>:<button className='reservar'   data-bs-toggle="modal" data-bs-target="#exampleModal"
            aria-expanded="false" aria-haspopup="true">RESERVAR AHORA</button>
         }
         
      </div> 
       
      </div>
      </>
  )
}

export default Junior
