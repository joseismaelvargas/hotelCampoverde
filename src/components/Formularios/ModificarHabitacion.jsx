
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useParams } from 'react-router-dom';
import { URL_habitaciones } from '../js/peticionesHabitaciones';
import  imglogo from "/img/logo.png"
import Swal from 'sweetalert2';
import { modificarhabitaciones } from '../js/peticionesHabitaciones';
import { useNavigate } from 'react-router-dom';
import "../css/Formulario.css"
const ModificarHabitacion = () => {
     const { register, handleSubmit ,formState:{errors},setValue} = useForm();
    const{id}=useParams()
     const Nav=useNavigate()
    const[archivarImg,setArchivarim]=useState([])
  const[archivos,setArchivos]=useState([])
  
     const modificar=(data)=>{
        const formData=new FormData();
        formData.append("opciones",data.opciones);
        formData.append("info",data.info);
        formData.append("carasteristicas",data.carasteristicas);
        formData.append("precio",Number(data.precio));
        for(let i=0;i<archivarImg.length;i++){
             formData.append("ImagenesHabitacion",archivarImg[i])
        }
        console.log(archivarImg)
        // const reservaModificada={
        //  opciones:data.opciones,
        //  info:data.info,
        //  imagen1:data.img1,
        //  imagen2:data.img2,
        //  imagen3:data.img3,
        //  carasteristicas:data.carasteristicas,
        //  precio:Number(data.precio)
        // } 
      Swal.fire({
                      position: "top-center",
                      icon: "success",
                       title: "la habitacion ha sido Modificada con exito",
                               showConfirmButton: false,
                       timer: 5000
                                    });
                        console.log(formData)
                        modificaradmin(formData,id)
     
     }
     const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
     const urls = files.map(file => URL.createObjectURL(file));
     setArchivos(urls)
    setArchivarim(files)

   
  };
     
     const modificaradmin=async(reservaModificada,id)=>{
       try{
         const response=await (modificarhabitaciones(reservaModificada,id))
          console.log(response)
         if(response.status===200){
              Nav("/admin") 
         }
     }catch{
         console.error("error al modificar")
     }
     }

       const buscarhabitacion=async(id)=>{
         try{
            const response=await fetch(URL_habitaciones+"/crear")
            if(response.status===200){
             const data=await response.json()
             console.log(data) 
            
              if(data.length>0){
               const reservaencontrada= data.find((item)=>item._id===id)
               setValue('opciones',reservaencontrada.opciones)
               setValue('info',reservaencontrada.info)
            
               setValue('precio',reservaencontrada.precio)
               setValue('carasteristicas',reservaencontrada.carasteristicas)
          
                setArchivos(reservaencontrada.ImagenesHabitacion)
               
               
               
              }
            }
         }catch(error){
           console.error(error)
         }
        }
        useEffect(()=>{
         buscarhabitacion(id)
        },[id])
  return (
    <main>

   
    <Form onSubmit={handleSubmit(modificar)} className='formulario'>  
        <img src={imglogo} alt="imglogo" className='img-crear' />
              <h3 className='text-center  text-white'>Modificar Habitaciones</h3>
      
              <FloatingLabel label="Tipo de habitacion" className='container'>
        <Form.Select className='select  w-[500px]' aria-label="Default select example" aria-placeholder='Tipo de Habitacion' {...register("opciones", { required: true })}>
            <option value="Suite Premiun">Suite Premiun</option>
            <option value="Suite Junior">Suite Junior</option>
            <option value="Suite Estandar">Suite Estandar</option>
          
          </Form.Select>

          </FloatingLabel>
          <FloatingLabel label="Info de Habitacion" className=' container  my-2 '>
        <Form.Control       rows={5}  as="textarea" className=" auto-expand" placeholder="Info de Habitacion"  name='info' {...register("info",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:10,message:"Ponga una info valida"},
            maxLength:{value:200,message:"no puede poner mas de 200 palabras en carasteristica"}
        })}/>
        <span className='text-danger' >{errors.info&&errors.info.message}</span> 
      </FloatingLabel>
      
      <FloatingLabel label="carasteristica de habitacion" className='container'>
        <Form.Control rows={4}  as="textarea"placeholder="Info de Habitacion" className='auto-expand'  name='info' {...register("carasteristicas",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:10,message:"Ponga una carasteristica valida"},
            maxLength:{value:50,message:"no puede poner mas de 50 palabras en carasteristica"}
        })}/>
        <span className='text-danger' >{errors.carasteristicas&&errors.carasteristicas.message}</span> 
      </FloatingLabel> 
    
     
   <FloatingLabel className='container my-2 ' >
          <Form.Group controlId="formFile" className="mb-3"> 
            
       

     <Form.Control
  type="file"
  name='ImagenesHabitacion'
  id='ImagenesHabitacion'
  multiple
  onChange={handleFileChange}
/>

 <div className="preview-container" style={{ margin:'5px', display: 'flex', gap: '10px' }}>
  {archivos.map((url, i) => (
    <img
      key={i}
      src={url}
      alt={`imagen-${i}`}
      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
    />
  ))}
</div> 
      </Form.Group>
      </FloatingLabel>
   
      <FloatingLabel label="Precio de Habitacion" className='container '>
        <Form.Control type='Number' placeholder='Precio de Habitacion' name='personas' {...register("precio",{
            required:{value:true,message:"Indique el Precio"}
        })}></Form.Control>
        <span className='text-danger' >{errors.precio&&errors.precio.message}</span> 
      </FloatingLabel>
      
      
      <div className='d-flex justify-content-center '>
        <button className='buttonlogear  my-3' type='Submit'>Agregar HAbitacion</button>
      </div>
     
      </Form>
  </main>
  )
}

export default ModificarHabitacion
