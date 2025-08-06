
import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../css/Formulario.css"
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import imglogo from "/img/logo.png"
import { petticionAgregar } from '../js/peticionesHabitaciones';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearHabitacion = () => {
      const [previews,setPreviews]=useState([])
     const { register, handleSubmit ,formState:{errors}} = useForm();
     const [archivos,setarchivos]=useState([])
     const Nav=useNavigate()

 const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setarchivos(files)
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviews(urls);
  };
     
  
  
  
  const agregarHabitacion=(data)=>{


   
      const formData = new FormData();

    formData.append("opciones", data.opciones);
    formData.append("info", data.info);
    formData.append("carasteristicas", data.carasteristicas);
 
    formData.append("precio", Number(data.precio));
   
     for(let i=0;i<archivos.length;i++){
     formData.append("ImagenesHabitacion",archivos[i])
    }
 

      agregar(formData)
       
    }

     
     const agregar=async(habitacion)=>{
      try{
         const response=await petticionAgregar(habitacion)
        
       if(response.status===201){
           Nav("/admin")
       }else{
           alert("Error") 
       }
      }catch{
        console.error("Error en la peticion")
      }
     }
  return (
    <main>

   
    <Form onSubmit={handleSubmit(agregarHabitacion)} className='formulario'>  
        <img src={imglogo} alt="imglogo" className='img-crear' />
              <h3 className='text-center  text-white'>Agregar Habitaciones</h3>
       
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
            maxLength:{value:200,message:"no puede poner mas de 200 palabras en info"}
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
 
    
 
      <FloatingLabel className='container my-2'>
          <Form.Group controlId="formFile" className="mb-3">
     <Form.Control
  type="file"
  name='ImagenesHabitacion'
  id='ImagenesHabitacion'
  multiple
  onChange={handleFileChange}
/>
     
  {previews.length>0? <div className="preview-container" style={{ margin:'5px', display: 'flex', gap: '10px' }}>{previews.map((url, i) => (
    <img
      key={i}
      src={url}
      alt={`imagen-${i}`}
      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
    />
  ))}</div>:null}
 
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

export default CrearHabitacion
