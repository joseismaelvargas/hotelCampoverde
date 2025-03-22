import React from 'react'
import { useForm } from 'react-hook-form';
import "../css/Formulario.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import{ v4 as uuidv4}from'uuid'
import Form from 'react-bootstrap/Form';


const Reservar = () => {
    const { register, handleSubmit ,formState:{errors}} = useForm();
    const agregar=(data,e)=>{
        e.preventDefault()
          e.target.reset()

      let reserva={
          nombre:data.nombre,
          Dni:data.Dni,
          entrada:data.entrada,
          salida:data.salida,
          personas:data.personas,
          tipo:data.opciones

      }
      console.log(reserva)
      
      

      
  }
  return (
  <>
  <main>

    <p className='text-center'>Indica las fechas para ver la disponibilidad y los precios del alojamiento</p>
    <Form onSubmit={handleSubmit(agregar)} className='formulario'>  
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
      
      <FloatingLabel controlId="floatingPassword" label="DNI" className='container'>
        <Form.Control type="Number" placeholder="Nombre de dueño"  name='Dni' {...register("Dni",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga un Dni valido"}
        })}/>
        <span className='text-danger' >{errors.Dni&&errors.Dni.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="Fecha Entrada" className='container my-3' >
        <Form.Control type='date' placeholder='Fecha de Entrada' name='entrada' {...register("entrada",{
            required:{value:true,message:"Ponga Fecha por favor"}
        })}/>
        <span className='text-danger' >{errors.fechaentrada&&errors.fechaentrada.message}</span> 
      </FloatingLabel>
      
     
      <FloatingLabel label="Fecha Salida" className='container my-3' >
        <Form.Control type='date' placeholder='Fecha de Salida' name='salida' {...register("salida",{
            required:{value:true,message:"Ponga Fecha por favor"}
        })}/>
        <span className='text-danger' >{errors.fechaesalida&&errors.fechaesalida.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="Numero de Personas" className='container my-3'>
        <Form.Control type='Number' placeholder='Numero de Personas' name='personas' {...register("personas",{
            required:{value:true,message:"Indique el numero de Personas"}
        })}></Form.Control>
        <span className='text-danger' >{errors.personas&&errors.hora.personas}</span> 
      </FloatingLabel>
      
      <Form.Select className='select' aria-label="Default select example" aria-placeholder='Tipo de Habitacion' {...register("opciones", { required: true })}>
            <option value="Premiun">Suite Premiun</option>
            <option value="Junior">Suite Junior</option>
            <option value="Estandar">Suite Estandar</option>
          
          </Form.Select>
      <div className='d-flex justify-content-start '>
        <button className='buttonenviar  my-3' type='Submit'>Reservar Ahora</button>
      </div>
     
      </Form>
  </main>
  </>
  )
}

export default Reservar
