import React,{useEffect, useState} from 'react'
import "../css/verHabitacion.css"
import { Autoplay,Pagination,Navigation} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from 'react-router-dom';
import { URL_habitaciones } from '../js/peticionesHabitaciones';



const Verhabitacion = ({logeadoUser}) => {
  const [habitacion,setHabitacion]=useState(null)
  
const {id}=useParams()

 const ApiHabitacion=async(id)=>{
  try{
     let response=await fetch( URL_habitaciones+"/crear")
   
     if(response.ok){
     let data=await response.json()
     
       let filtrar=data.find((item)=>item._id===id)
       setHabitacion(filtrar)
       
     }

  }catch{
    console.error("Error en la api")
  }
 }
 const Descuento=()=>{
  return habitacion.precio+20

}

 useEffect(()=>{
  ApiHabitacion(id)

 },[id])
  return (

    <main >

      <section className='contenidos container'>

       {
      habitacion?
<div className='contenido' >
          <div className='div-img '>
         <Swiper modules={[Autoplay, Navigation,   Pagination]}
              slidesPerView={1} 
              spaceBetween={0} 
            
            autoplay={{
                delay:10000
            }}
            navigation
            pagination={{
                clickable: true,
              }}
            loop={true} >
              {
                habitacion.ImagenesHabitacion?.map((img,i)=>(
                  <SwiperSlide key={i}>
                    <img src={img} alt='hotel' className='img-cuarto'/>
                  </SwiperSlide>
                ))
              }
        
                  </Swiper>
                  <div>
                    
                    <p className='info'>{habitacion.info}</p>
                  
               
                  </div>
                 
                 <hr />
      </div> 
      <div class="separador"> </div>
      <div className='detalles'>
            <div className='div-detalles'>

           <h3 className='tipo'>{habitacion.opciones}</h3>
            <p className='mas-info'>{habitacion.carasteristicas}</p>
             <p className='descuento'><strong className='porcentaje'>%20</strong><del>${Descuento()}.00</del> </p>
           <p className='precio'> ${habitacion.precio}</p>
       <h5 className='medios'>Medios de pago</h5>
                <div className='medios-depago' >
                      
                        
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/dd2c3fc3-45ea-43e6-bcff-9cf5110c979b___b3c0a27259d4e4f9a2a08bad60b8cf90.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/52443e71-e815-4a4a-baad-470fd14e6f87___66fbd627742cea2d6e58b4c5545f62c9.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/1b403e7f-21b3-412c-9ed0-49b7ba24a14b___daff6e2be4b4264d92181706dd034176.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/d0e38006-1466-4294-9868-d2e8969370a7___c8b105cadad8af6aca8d1164c6e2d070.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/6a5968fd-1ffb-4a1e-95b6-e50c6b97cc6c___53519102ea64f853910360c135478239.svg" alt=""  className="tarjetacarasteristica"/>
                    
                      
                       
                      </div>
                      {logeadoUser.length>0?<Link className='buttonreservar ' end to={`/reservar/${id}`} >Reservar ahora</Link>
              :<button className='buttonreservar' data-bs-toggle="modal" data-bs-target="#exampleModal"
            aria-expanded="false" aria-haspopup="true" >Reservar ahora</button>
  }
             
           </div>
     
       </div>
       </div>
          

       :
       
<div className='containerload'>
   <img src='https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-15-221_512.gif' className='gifload'></img> 
</div>     
           }
    
      </section>
    
    </main>
  
  )
}

export default Verhabitacion
