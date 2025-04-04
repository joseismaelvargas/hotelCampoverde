export const URL_habitaciones=import.meta.env.VITE_API_HABITACIONES


export const petticionAgregar = async (habitacion) => {
   try {
       console.log("Enviando datos:", habitacion);

       const response = await fetch(URL_habitaciones+"/crear", {
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

export const habitacionDelete=async(id)=>{
   try{
          const response=await fetch(URL_habitaciones+"/eliminarHabitacion"+"/"+id,{
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
export const modificarhabitaciones=async(habitacion,id)=>{

    try{
      const response=await fetch(URL_habitaciones+"/editarHabitacion"+"/"+id,{
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