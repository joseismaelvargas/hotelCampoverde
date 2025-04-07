import React ,{useEffect}from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "../css/Formulario.css"
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import imglogo from "/img/logo.png"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { URL_Usuario } from '../js/queries';
import { useParams } from 'react-router-dom';
import { editaUsuario } from '../js/queries';
import Modificar from './Modificar';
const ModificarUsuario= () => {
    const { register, handleSubmit ,formState:{errors},setValue} = useForm();
    const Nav=useNavigate()
    const{id}=useParams()
  const modificarAdmin=(data)=>{
       
        const usuarioModificado={
         user:data.user,
         nombre:data.nombre,
         correo:data.correo,
         contraseña:data.contraseña
        } 
      Swal.fire({
                      position: "top-center",
                      icon: "success",
                       title: "El Usuario hasido Modificado",
                               showConfirmButton: false,
                       timer: 5000
                                    });
                        Modificar(usuarioModificado,id)
     
     }

 const Modificar=async(usuario,id)=>{
   try{
   const response=await (editaUsuario(usuario,id))
   if(response.status===200){
    Nav("/admin")
   }
   }catch{
    console.error("Error en el sistema")
   }
 }
 const buscarUsuario=async(id)=>{
         try{
            const response=await fetch(URL_Usuario+"/verusuarios")
            if(response.status===200){
             const data=await response.json()
             console.log(data)
              if(data.length>0){
               const reservaencontrada= data.find((item)=>item._id===id)
               setValue('user',reservaencontrada.user)
               setValue('nombre',reservaencontrada.nombre)
               setValue('correo',reservaencontrada.correo)
               setValue('contraseña',reservaencontrada.contraseña)
               
          
               
               
               
               
              }
            }
         }catch(error){
           console.error(error)
         }
        }
        useEffect(()=>{
         buscarUsuario(id)
        },[id])
return (
<main>


<Form onSubmit={handleSubmit(modificarAdmin)} className='formulario'>  
      <img src={imglogo} alt="imglogo" className='img-crear' />
      <h3 className='text-center  text-white'>Modifique la cuenta de Usuario</h3>
  <FloatingLabel
    controlId="floatingInput"
    label="Modifique el nombre de usuario"
    className="container mb-3 my-3 "
  >
    <Form.Control type="text" placeholder="Modifique el nombre de usuario" name='user' {...register("user",{
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

  

  <FloatingLabel label="Modifique la contraseña" className='container my-3'>
    <Form.Control  placeholder='Modifique la  contraseña' name='contraseña' {...register("contraseña",{
        required:{value:true,message:"Establesca una contraseña"},
        minLength:{value:3,message:"Ponga una contraseña valida"}
    })}></Form.Control>
    <span className='text-danger' >{errors.contraseña&&errors.contraseña.message}</span> 
  </FloatingLabel>
   
  <div className='d-flex justify-content-center '>
    <button className='buttonlogear  ' type='Submit'>Modificar Usuario</button>
  </div>
 
  </Form>
</main>
)
}

export default ModificarUsuario