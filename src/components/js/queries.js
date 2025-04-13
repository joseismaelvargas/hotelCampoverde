
export const URL_Usuario=import.meta.env.VITE_API_HABITACIONES



const usuariosAdmin = {
   contraseña: "0340",
   correo: "isma@gmail.com"
 };
 
 const user={
   contraseña: "03401122",
   correo: "isma@gmail.com"
 }

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

 
 export const logearUsuario =async (contraseñas,correo) => {
   try{
   const response=await fetch(URL_Usuario+"/verusuarios")

   if(response.ok){
     let datausuarios =await response.json()
      
     const usuario=datausuarios.find((item)=>item.correo===correo)
  if (
      correo.toLowerCase() === usuariosAdmin.correo.toLowerCase()
      ) {
       sessionStorage.setItem("administrado", JSON.stringify(usuariosAdmin.correo));
       return "admin";
  } else if (
       
      correo === usuario.correo&&contraseñas===usuario.contraseña
     ) {
       sessionStorage.setItem("usuario", JSON.stringify(user.correo));
     return "usuario";
     } else {
     console.log("Credenciales incorrectas");
      return false;
    }
   }
  }
  catch(error){
   console.error(error)
  }
 
  
    
  
 };
 