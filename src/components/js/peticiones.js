const URL_Usuario=import.meta.env.VITE_URL_USUARIO
export const  agregarUsuario  =async(usuario)=>{
  try{
  const response=await fetch(URL_Usuario,{
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