import React, {  useEffect, useState} from 'react'


import "../components/css/hotel.css"
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'
import { useParams } from 'react-router-dom'
import { hotel } from './js/datosservices'
const Hotel = () => {
   const [data,setData]=useState([])
    const{id}=useParams()
    const num=Number(id)
    
   

  
  useEffect(()=>{
  Filtrar(num);
  },[num])
  const Filtrar = (id) => {
      console.log(id)
    const filtrar = hotel.filter(item => item.id === id);
    if(filtrar.length>0){
      setData(filtrar) 
      console.log(filtrar)
    }else{
      console.log("error")
    }
   
  };


  return (
    <main className='main'>

    {
        data.map((item)=>
        <section className="hotel container" key={item.id}>
                <div className="section-hotel">
                   <h1>{item.title}</h1>  
                   <p>
                  
                  {item.info}</p>
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
                        <img src={item.images} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item.img2} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item.img3} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item.img4} alt="hotel" className="img-index" /> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={item.img5} alt="hotel" className="img-index" /> 
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
        )
    }
         </main>
  )
}

export default Hotel
