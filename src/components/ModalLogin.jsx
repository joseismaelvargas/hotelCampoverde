import "../components/css/login.css"
import icoface from "/img/facebook-icon.svg"
import icongoogle from "/img/google-icon.svg"
import { useForm } from "react-hook-form"
import {  useNavigate } from "react-router-dom"
import { logearUsuario } from "./js/queries"
export const ModalLogin=()=>{
    const { register, handleSubmit ,formState:{errors}} = useForm();
     const Nav=useNavigate()
const Logear=(data)=>{
    const tipo=logearUsuario(data)
    if (tipo === "admin") {
      Nav("/admin");
      location.reload();
    } else if (tipo === "usuario") {
      alert("Bienvenido usuario");
      location.reload();
    } else {
      alert("Correo o contraseña incorrectos");
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
            <input type="number" {...register("contraseña",{
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

