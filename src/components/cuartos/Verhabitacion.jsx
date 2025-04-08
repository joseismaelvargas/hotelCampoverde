import React from 'react'
import "../css/verHabitacion.css"
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
const Verhabitacion = () => {
  return (
    <main >
      <section className='contenidos container'>
         <div className='contenido'>
          <div className='div-img '>
         <Swiper modules={[Autoplay, Navigation,   Pagination]}
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
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-cuarto" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-cuarto" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-cuarto" /> 
                    </SwiperSlide>
                   
                  </Swiper>
                  <div>
                    
                    <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed possimus aperiam enim autem doloremque vel, omnis, reiciendis, velit cum ratione laboriosam ab. Fugit, quidem nisi tempore necessitatibus corporis dolorem esse.</p>
                  
               
                  </div>
                 
                 <hr />
      </div> 
      <div class="separador"> </div>
      <div className='detalles'>
            <div className='div-detalles'>

           <h3 className='tipo'>Suite Junior</h3>
            <p className='mas-info'>Placard 6P 4C Nordico 176X47X180 Miel/Blanco Muebles Gacela</p>
             <p className='descuento'><strong className='porcentaje'>%20</strong><del>$24.000</del> </p>
           <p className='precio'> $500.00</p>
       <h5 className='medios'>Medios de pago</h5>
                <div className='medios-depago' >
                      
                        
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/dd2c3fc3-45ea-43e6-bcff-9cf5110c979b___b3c0a27259d4e4f9a2a08bad60b8cf90.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/52443e71-e815-4a4a-baad-470fd14e6f87___66fbd627742cea2d6e58b4c5545f62c9.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/1b403e7f-21b3-412c-9ed0-49b7ba24a14b___daff6e2be4b4264d92181706dd034176.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/d0e38006-1466-4294-9868-d2e8969370a7___c8b105cadad8af6aca8d1164c6e2d070.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/6a5968fd-1ffb-4a1e-95b6-e50c6b97cc6c___53519102ea64f853910360c135478239.svg" alt=""  className="tarjetacarasteristica"/>
                    
                      
                       
                      </div>
              <button className='buttonreservar' >Reservar ahora </button>
              

             
           </div>
       
      </div>
    </div>  
      </section>
     
    </main>
    
  )
}

export default Verhabitacion
