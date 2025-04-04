import React from 'react'
import { useForm } from 'react-hook-form';
import "../css/Formulario.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { petticionReservar } from '../js/reservas';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import { data, useNavigate } from 'react-router-dom';
const Reservar = () => {
    const { register, handleSubmit ,formState:{errors}} = useForm();
    const Nav=useNavigate()

   
    const agregarReserva=(data)=>{

         

      let reservas={
          nombre:data.nombre,
          Dni:Number(data.dni),
          corre:data.correo,
          entrada:data.entrada,
          salida:data.salida,
          personas:Number(data.personas),
          tipo:data.opciones

      }
    
      localStorage.setItem("reservo", JSON.stringify(data.dni) || []);
     agregarReservas(reservas)    

      
  }
  const agregarReservas=async(reservas)=>{
    try{
   const respose=await petticionReservar(reservas)
   console.log(respose)
   
    
 
       Swal.fire({
                  position: "top-center",
                 icon: "success",
                 title: "Su Reserva ha sido creada con exito",
                   showConfirmButton: false,
                timer: 500
                        });
      
 


    }catch(error){
      console.log(error)
    }
  }
  return (
  <>
  <main>

    <p className='text-center'>Indica las fechas para ver la disponibilidad y los precios del alojamiento</p>
    <Form onSubmit={handleSubmit(agregarReserva)} className='formulario'>  
          <h3 className='text-center  text-white'>Reserva tu Habitacion</h3>
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
        <Form.Control type="email" placeholder="Nombre de dueño"  name='correo' {...register("correo",{
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
      
      <Form.Select className='select' aria-label="Default select example" aria-placeholder='Tipo de Habitacion' {...register("opciones", { required: true,message:"Agregue el tipo de habitacion" })}>
            <option value="Premiun">Suite Premiun</option>
            <option value="Junior">Suite Junior</option>
            <option value="Estandar">Suite Estandar</option>
            
          </Form.Select>
      <span className='text-danger' >{errors.opciones&&errors.opciones.message}</span> 
      {/* <div className='d-flex justify-content-start '>
        
      </div> */}
     <button className='buttonenviar  my-3' type='Submit'>Reservar Ahora</button>
      </Form>
  </main>
  </>
  )
}

export default Reservar
