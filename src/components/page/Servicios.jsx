import React from 'react'

import "../css/contenido.css"
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "/img/service1.jpg"
import img2 from "/img/service2.jpg"
import img3 from "/img/service3.jpg"
import img4 from "/img/service4.jpg"
import img5 from "/img/service5.jpg"
const Servicios = () => {
  return (
    <>
    <main> 
       <section className="hotel container">
                <div className="section-hotel">
                   <h1 className='subtitle'>SERVICIOS</h1>  
                   <div className='div-service'>
                     <ul>
                <li>-lobby bar</li>
                <li>- wifi</li>
                <li>-Catering</li>
                <li>-Servicios ala Habitacion</li>
                <li>-amplio parque</li>
                <li>-Restaurante</li>
               </ul>
               <ul>
                <li>-estacionamiento privado</li>
                <li>-piscina</li>
                <li>-salon de fiestas</li>
                <li>-Servicios ala Habitacion</li>
                <li>-Casino Privado</li>
                <li>-Mesa de comida y Musica</li>
               </ul>
                   </div>
              
               
                   <Swiper modules={[Autoplay, Navigation,Pagination]}
              slidesPerView={1} 
              spaceBetween={0} 
            
            autoplay={{
                delay:5000
            }}
            navigation
            pagination={{
                clickable: true,
              }}
            loop={true} >
                    <SwiperSlide>
                        <img src={img1} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                  </Swiper>
                  
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
      </main>
  
          
    </>
   
  )
}

export default Servicios
