import "../components/css/login.css"
import icoface from "/img/facebook-icon.svg"
import icongoogle from "/img/google-icon.svg"
import { useForm } from "react-hook-form"
import {  useNavigate } from "react-router-dom"
import { logearUsuario } from "./js/queries"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import React from "react"
export const ModalLogin=()=>{
    const { register, handleSubmit ,formState:{errors}} = useForm();
     const Nav=useNavigate()


const Logear=async(data)=>{
    const contraseña=data.contraseña
    const correo=data.correo
    
    const tipo=await logearUsuario(correo,contraseña)
  console.log(tipo)
    if (tipo==="admin") {
      
      Swal.fire({
        title: "Good job!",
        text: "Bienvenido Administrador",
        icon: "success"
      });
      Nav("/admin");
      location.reload()
       
    } else if (tipo==="usuario") {
      
      
    
      Swal.fire({
        title: "Good job!",
        text: "Bienvenido Usuario",
        icon: "success"
      });
      Nav("/habitaciones");
      location.reload()
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Error Contraseña o Correo incorrectos',
        icon: 'error',
       
      })
    }
     
     
    }
    return(
        <>
  



<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title " id="exampleModalLabel">Logearse </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form action="" onSubmit={handleSubmit(Logear)}>
            <label type="email "> Correo Electronico</label><br />
            <input type="email" {...register("correo",{
           required:"Agregue Su Correo",
           minLength:{value:3,message:"Agregue un Correo valido"}
           
            })}/> <br />
            { errors.correo &&<p className="errors">{errors.correo.message}</p>}
            <label htmlFor="" >Contraseña</label>
            <br />
            <input type="text" {...register("contraseña",{
              required:"Agregue Contraseña",
              minLength:{value:2,message:"Agregue una Contraseña valida"}
            })}/>
            { errors.contraseña &&<p  className="errors">{errors.contraseña.message}</p>}
     

      <button
                  type="button"
                  className="logingoogle "
                 
                >
                  <img
                    src={icongoogle}
                    alt="Google Icon"
                    className="tamañoLogoGyF "
                  />
                  Iniciar con Google
                </button>
                <button
                  type="button"
                  className="loginface "
                 
                >
                  <img
                    src={icoface}
                    alt="Google Icon"
                    className="tamañoLogoGyF me-2"
                  />
                  Iniciar con Google
                </button>
                <Link end to={"/createuser"} className="link-login" >¿Aún no estás registrado?  Crea tu cuenta gratuita aquí.</Link>
                  
                
               <button  className="btn btn-success" type="submit">Iniciar</button>
                </form>
      </div>
      <div className="modal-footer">
       
      </div> 
      
    </div>
  </div>
</div>
        </>

    )
}

