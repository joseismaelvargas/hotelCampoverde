
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useParams } from 'react-router-dom';
import { URL_habitaciones } from '../js/peticionesHabitaciones';
import  imglogo from "/img/logo.png"
import Swal from 'sweetalert2';
import { modificarhabitaciones } from '../js/peticionesHabitaciones';
import { useNavigate } from 'react-router-dom';
const ModificarHabitacion = () => {


    const { register, handleSubmit ,formState:{errors},setValue} = useForm();
       const{id}=useParams()
     
          
     const Nav=useNavigate()
    

     const modificar=(data)=>{
       
        const reservaModificada={
         opciones:data.opciones,
         info:data.info,
         imagen1:data.img1,
         imagen2:data.img2,
         imagen3:data.img3,
         precio:Number(data.precio)
        } 
      Swal.fire({
                      position: "top-center",
                      icon: "success",
                       title: "la habitacion ha sido Modificada con exito",
                               showConfirmButton: false,
                       timer: 5000
                                    });
                        modificaradmin(reservaModificada,id)
     
     }
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
               setValue('img1',reservaencontrada.imagen1)
               setValue('img2',reservaencontrada.imagen2)
               setValue('img3',reservaencontrada.imagen3)
               setValue('precio',reservaencontrada.precio)
          
               
               
               
               
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
        <Form.Select className='select  w-[500px]' aria-label="Default select example" aria-placeholder='Tipo de Habitacion' {...register("opciones", { required: true })}>
            <option value="Suite Premiun">Suite Premiun</option>
            <option value="Suite Junior">Suite Junior</option>
            <option value="Suite Estandar">Suite Estandar</option>
          
          </Form.Select>
      <br />

      
      <FloatingLabel label="Info de Habitacion" className='container'>
        <Form.Control type="textarea" placeholder="Info de Habitacion"  name='info' {...register("info",{
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

export default ModificarHabitacion
