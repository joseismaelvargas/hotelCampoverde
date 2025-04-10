import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useParams } from 'react-router-dom';
import { URL_reservas } from '../js/reservas';
import { modificarreserva } from '../js/reservas';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Modificar = () => {
     
        const { register, handleSubmit ,formState:{errors},setValue} = useForm();
        const{id}=useParams()
    

 const Nav=useNavigate()

const modificar=(data)=>{

  
   const reservaModificada={
    nombre:data.nombre,
    Dni:Number(data.dni),
    corre:data.corre,
    entrada:data.entrada,
    salida:data.salida,
    personas:Number(data.personas),
    tipo:data.opciones
   } 
 Swal.fire({
                 position: "top-center",
                 icon: "success",
                  title: "Su Reserva ha sido Modificada con exito",
                          showConfirmButton: false,
                  timer: 5000
                               });
                   modificaradmin(reservaModificada,id)

}
const modificaradmin=async(reservaModificada,id)=>{
  try{
    console.log(reservaModificada)
    const response=await (modificarreserva(reservaModificada,id))
    console.log(response)
    if(response.status===200){
         Nav("/admin") 
    }
}catch{
    console.error("error al modificar")
}
}
   const buscarReserva=async(id)=>{
    try{
       const response=await fetch(URL_reservas+"/verReservas")
  
       if(response.status===200){
        const data=await response.json()
        console.log(data)
         if(data.length>0){
          const reservaencontrada= data.find((item)=>item._id===id)
          setValue('nombre',reservaencontrada.nombre)
          setValue('Dni',reservaencontrada.Dni)
          setValue('corre',reservaencontrada.corre)
          setValue('entrada',reservaencontrada.entrada)
          setValue('salida',reservaencontrada.salida)
          setValue('personas',reservaencontrada.personas)
          setValue('opciones',reservaencontrada.tipo)
          
          
          
          
         }
       }
    }catch(error){
      console.error(error)
    }
   }
   useEffect(()=>{
    buscarReserva(id)
   },[id])
     
  return (
    <main>

    <Form onSubmit={handleSubmit(modificar)} className='formulario'>  
          <h3 className='text-center  text-white'>Modifica la Reserva</h3>
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre y apellido"
        className="container mb-3 my-3 "
      >
        <Form.Control type="text" placeholder="Nombre y apellido" name='nombre' {...register("nombre",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga un nombre valido"},
           
        })} />
         <span className='text-danger' >{errors.nombre&&errors.nombre.message}</span> 
      </FloatingLabel>
      
      <FloatingLabel  label="DNI" className='container'>
        <Form.Control type="Number" placeholder="Nombre de dueño"  name='Dni' {...register("dni",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga un Dni valido"}
        })}/>
        <span className='text-danger' >{errors.Dni&&errors.Dni.message}</span> 
      </FloatingLabel>
      <FloatingLabel  label="email" className='container my-3'>
        <Form.Control type="email" placeholder="Nombre de dueño"  name='corre' {...register("corre",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga un correo valido"}
        })}/>
        <span className='text-danger' >{errors.correo&&errors.correo.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="Fecha Entrada" className='container my-3' >
        <Form.Control type='date' placeholder='Fecha de Entrada' name='entrada' {...register("entrada",{
            required:{value:true,message:"Ponga Fecha por favor"}
        })}/>
        <span className='text-danger' >{errors.entrada&&errors.entrada.message}</span> 
      </FloatingLabel>
      
     
      <FloatingLabel label="Fecha Salida" className='container my-3' >
        <Form.Control type='date' placeholder='Fecha de Salida' name='salida' {...register("salida",{
            required:{value:true,message:"Ponga Fecha por favor"}
        })}/>
        <span className='text-danger' >{errors.salida&&errors.salida.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="Numero de Personas" className='container my-3'>
        <Form.Control type='Number' placeholder='Numero de Personas' name='personas' {...register("personas",{
            required:{value:true,message:"Indique el numero de Personas"}
        })}></Form.Control>
        <span className='text-danger' >{errors.personas&&errors.personas.message}</span> 
      </FloatingLabel>
      
      <Form.Select className='select' aria-label="Default select example" aria-placeholder='Tipo de Habitacion' {...register("tipo", { required: true,message:"Agregue el tipo de habitacion" })}>
            <option value="Premiun">Suite Premiun</option>
            <option value="Junior">Suite Junior</option>
            <option value="Estandar">Suite Estandar</option>
            
          </Form.Select>
      <span className='text-danger' >{errors.opciones&&errors.opciones.message}</span> 
      
     <button className='buttonenviar  my-3' type='Submit'>Reservar Ahora</button>
      </Form>
  </main>
  )
}

export default Modificar
