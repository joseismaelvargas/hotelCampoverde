import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay,Pagination,Navigation } from 'swiper/modules'
import "../css/contenido.css"
import img1 from "/img/imagenes1.jpg"
import img2 from "/img/imagenes2.jpg"
import img3 from "/img/imagenes3jpg.jpg"
import img4 from "/img/imagenes4jpg.jpg"
import img5 from "/img/imagenes5.jpg"
const Fotos = () => {
  return (
   <>
      <main> 
       <section className="hotel container">
                <div className="section-hotel">
                   <h1 className='subtitle-services'>IMAGENES</h1>  
                <p>
                Explora el entorno natural que rodea nuestro hotel y disfruta de aventuras inolvidables. Ya sea que prefieras una caminata por senderos rodeados de vegetación, un paseo en bicicleta o actividades acuáticas, en Campos Verdes encontrarás opciones para todos los gustos. Conecta con la naturaleza y vive una experiencia única en cada paso.</p>              
               
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
                        <img src={img4} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="hotel" className="img-index" /> 
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

export default Fotos
