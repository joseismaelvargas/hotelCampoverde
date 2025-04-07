
import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../css/Formulario.css"
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import imglogo from "/img/logo.png"
import { petticionAgregar } from '../js/peticionesHabitaciones';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CrearHabitacion = () => {
  
     const { register, handleSubmit ,formState:{errors}} = useForm();

     const Nav=useNavigate()

     const agregarHabitacion=(data,e)=>{
      e.preventDefault()

     const habitacionCreada={
        opciones:data.opciones,
        info:data.info,
        precio:Number(data.precio),
        imagen1:data.img1,
        imagen2:data.img2,
        imagen3:data.img3
      }
 

      agregar(habitacionCreada)
         Swal.fire({
                          position: "top-center",
                          icon: "success",
                          title: "La habitacion fue creada con exito",
                          showConfirmButton: false,
                          timer: 500
                        });
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
        <Form.Select className='select  w-[500px]' aria-label="Default select example" aria-placeholder='Tipo de Habitacion' {...register("opciones", { required: true })}>
            <option value="Suite Premiun">Suite Premiun</option>
            <option value="Suite Junior">Suite Junior</option>
            <option value="Suite Estandar">Suite Estandar</option>
          
          </Form.Select>
      <br />

      
      <FloatingLabel label="Info de Habitacion" className='container'>
        <Form.Control type="text" placeholder="Info de Habitacion"  name='info' {...register("info",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga una info valida"}
        })}/>
        <span className='text-danger' >{errors.info&&errors.info.message}</span> 
      </FloatingLabel>
 
      <FloatingLabel label="ingrese la primera imagen de la habitacion" className='container my-2'>
        <Form.Control type="text" placeholder="Info de Habitacion"  name='info' {...register("img1",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga una img valida"}
        })}/>
        <span className='text-danger' >{errors.img1&&errors.img1.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="ingrese la segunda imagen de la habitacion" className='container my-2'>
        <Form.Control type="text" placeholder="Info de Habitacion"  name='info' {...register("img2",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga una img valida"}
        })}/>
        <span className='text-danger' >{errors.img2&&errors.img2.message}</span> 
      </FloatingLabel>
      <FloatingLabel label="ingrese la tercera imagen de la habitacion" className='container my-2'>
        <Form.Control type="text" placeholder="Info de Habitacion"  name='info' {...register("img3",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga una img valida"}
        })}/>
        <span className='text-danger' >{errors.img3&&errors.img3.message}</span> 
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
