export const URL_reservas=import.meta.env.VITE_API_HABITACIONES


export const petticionReservar = async (habitacion) => {
   try {
       console.log(habitacion)

       const response = await fetch(URL_reservas+"/crearReserva", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(habitacion)
       });
      

       if (!response.ok) {
           const errorData = await response.json();
           console.error("Error en el servidor:", errorData);
       } else {
           const data = await response.json();
           console.log("Habitación agregada con éxito:", data);
       }
 return response
   } catch (error) {
       console.error("Error en la petición:", error); 
   }
};

 
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
