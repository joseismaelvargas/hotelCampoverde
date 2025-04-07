import React from 'react'
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
const Verreservas = () => {
  return (
    <main>
      <div className='contenido'>
         <div>
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
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.gKZDRXD7F1POl22eSkazVQHaE8&pid=Api&P=0&h=180" alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                  </Swiper>
                  
         </div>
      </div>
    
    </main>
  )
}

export default Verreservas
