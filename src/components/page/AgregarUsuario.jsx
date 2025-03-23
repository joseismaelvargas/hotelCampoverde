import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../css/Formulario.css"
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import imglogo from "/img/logo.png"

const AgregarUsuario = () => {
        const { register, handleSubmit ,formState:{errors}} = useForm();

    const agregarUser=(data)=>{
        let user={
            user:data.user,
            nombre:data.nombre,
            contraseña:data.contraseña,
            correo:data.correo,
            
  
        }
        console.log(user)
        }
  return (
    <main>

  
    <Form onSubmit={handleSubmit(agregarUser)} className='formulario'>  
          <img src={imglogo} alt="imglogo" className='w-[300px] my-10 mx-37' />
          <h3 className='text-center  text-white'>Crea tu Cuenta  de Usuario</h3>
      <FloatingLabel
        controlId="floatingInput"
        label="Elige un nombre de usuario"
        className="container mb-3 my-3 "
      >
        <Form.Control type="text" placeholder="Elige un nombre de usuario" name='user' {...register("user",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga un nombre valido"},
           
        })} />
         <span className='text-danger' >{errors.user&&errors.user.message}</span> 
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Nombre Completo"
        className="container mb-3 my-3 "
      >
        <Form.Control type="text" placeholder="Nombre Completo" name='nombre' {...register("nombre",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga un nombre valido"},
           
        })} />
         <span className='text-danger' >{errors.nombre&&errors.nombre.message}</span> 
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="correo" className='container'>
        <Form.Control type="email" placeholder="Tu Correo Electronico"  name='correo' {...register("correo",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Ponga un correo valido"}
        })}/>
        <span className='text-danger' >{errors.correo&&errors.correo.message}</span> 
      </FloatingLabel>

      

      <FloatingLabel label="Establecer una contraseña" className='container my-3'>
        <Form.Control type='password' placeholder='Establecer una contraseña' name='contraseña' {...register("contraseña",{
            required:{value:true,message:"Establesca una contraseña"},
            minLength:{value:3,message:"Ponga una contraseña valida"}
        })}></Form.Control>
        <span className='text-danger' >{errors.contraseña&&errors.contraseña.message}</span> 
      </FloatingLabel>
       <div className='d-flex w-[400px] mx-10 gap-3'>
       <input className='check 'type="checkbox" /><p className='text-amber-50'>Al crear una nueva cuenta, usted acepta nuestros términos de servicio y política de privacidad .</p>
       </div>
       
      <div className='d-flex justify-content-center '>
        <button className='buttonlogear  ' type='Submit'>Incribirse</button>
      </div>
     
      </Form>
  </main>
  )
}

export default AgregarUsuario
