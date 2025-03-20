import "../components/css/login.css"
import icoface from "/img/facebook-icon.svg"
import icongoogle from "/img/google-icon.svg"
export const ModalLogin=()=>{
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
        <form action="">
            <label htmlFor="">Correo Electronico</label><br />
            <input type="text" /><br />
            <label htmlFor="">Contraseña</label>
            <br />
            <input type="number" />
        </form>

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
               
              
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-success">Iniciar</button>
      </div>
    </div>
  </div>
</div>
        </>

    )
}

