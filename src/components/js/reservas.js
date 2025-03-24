export const URL_reservas=import.meta.env.VITE_URL_USUARIO

 
export const modificarreserva=async(habitacion,id)=>{

    try{
      const response=await fetch(URL_reservas+"/"+id,{
       method:"PUT",
       headers:{
          "Content-Type":"application/json"
       },
       body:JSON.stringify(habitacion)
      })     
      return response
    }catch(error){
       console.log("error al modificar",error)
    }
 }
 export const borrarReserva=async(id)=>{
    try{
       const response=await fetch(URL_reservas+"/"+id,{
          method:"DELETE"
       })
       return response
    }catch(error){
       console.log("Error al Borrar",error)
    }
 }
export const peticionReserva=async(reserva)=>{
   try{
       const response=await fetch(URL_reservas,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(reserva)
     
    })
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error en el servidor:", errorData);
      }
    
   }catch(error){
  console.error(error)
   }
}