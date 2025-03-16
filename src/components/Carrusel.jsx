import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay ,Pagination} from 'swiper/modules'; 
import imghotel from "/img/hotel-campo.jpg"
import imghotel2 from"/img/slice-1.jpg"
import imghotel3 from"/img/hote.jpg"
import "../components/css/Carrusel.css"
export const Carrusel=()=>{
    return(
        <>
        <section>
       <Swiper modules={[ Navigation,Autoplay,Pagination]}
       slidesPerView={1} 
       spaceBetween={30}
       autoplay={ {
            delay:4000
        }
       }
       pagination={{
        clickable: true,
      }}
      loop={true}
       >
         <SwiperSlide>
            <img src={imghotel} alt="img" className='img-carrusel' />
            <div
             className='div-info'>
                <h2>Calidad y el mejor confort</h2>
             </div>
         </SwiperSlide>
         <SwiperSlide>
         <img src={imghotel2} alt="img" className='img-carrusel' /> 
         <div
             className='div-info'>
                <h2>Entre el cielo y la tierra</h2>
             </div>
         </SwiperSlide>
         <SwiperSlide>
         <img src={imghotel3} alt="img" className='img-carrusel' /> 
         <div
             className='div-info'>
                <h2>Un ambiente unico, relajado, alejado, tranquilo.</h2>
             </div>
         </SwiperSlide>
       </Swiper>
        </section>
        </>
    )
}