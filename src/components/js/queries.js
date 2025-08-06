
export const URL_Usuario=import.meta.env.VITE_API_HABITACIONES



 export const usuarioDelete=async(id)=>{
    try{
           const response=await fetch(URL_Usuario+"/eliminarUsuario"+"/"+id,{
              method:"DELETE"
           })
           if (!response.ok) {
             const errorData = await response.json();
             console.error("Error en el servidor:", errorData);
         } else {
             const data = await response.json();
             console.log("Habitación agregada con éxito:", data);
         }
           return response
        }catch(error){
           console.log("Error al Borrar",error)
        }
 }
 const addUser=async(usuario)=>{
  try{
  const response=await fetch(URL_Usuario+"/crearusuario",{
    method:"POST",
    headers:{
        "Content-Type": "application/json",

    },
    body:JSON.stringify(usuario)
  })
  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error en el servidor:", errorData);
  }
  return response;
  }
  catch(error){
    console.error("Error al agregar usuario",error)
  }
}
export default addUser

export const editaUsuario=async(usuario,id)=>{
 try{
      const response=await fetch(URL_Usuario+"/editarUsuario"+"/"+id,{
       method:"PUT",
       headers:{
          "Content-Type":"application/json"
       },
       body:JSON.stringify(usuario)
      })     
      return response
    }catch(error){
       console.log("error al modificar",error)
    }
}

 
export const logearUsuario = async (correo, contraseña) => {
  try {
    console.log(correo,contraseña)
    const response = await fetch(URL_Usuario + "/logear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo,
        contraseña
      }),
    });

    const data = await response.json();
    

    if (response.ok) {
      if (data.rol === "admin") {
        sessionStorage.setItem("administrado", JSON.stringify(correo));
        return "admin";
      } else {
        sessionStorage.setItem("usuario", JSON.stringify(correo));
        return "usuario";
      }
    } else {
      console.log(data.mensaje || "Credenciales incorrectas");
      return false;
    }
  } catch (error) {
    console.error("Error al logear:", error);
    return false;
  }
};
